var replacer = function (key, value) {
  if (value.geometry) {
    var type;
    var rawType = value.type;
    var geometry = value.geometry;

    if (rawType === 1) {
      type = geometry.length === 1 ? 'Point' : 'MultiPoint';
    } else if (rawType === 2) {
      type = geometry.length === 1 ? 'LineString' : 'MultiLineString';
    } else if (rawType === 3) {
      type = geometry.length === 1 ? 'Polygon' : 'MultiPolygon';
    }

    return {
      'type': 'Feature',

      'geometry': {
        'type': type,
        'coordinates': geometry.length == 1 ? geometry : [geometry]
      },
      'properties': value.tags
    };
  } else {
    return value;
  }
};

var tilePixels = new ol.proj.Projection({
  code: 'TILE_PIXELS',
  units: 'tile-pixels'
});

var url = 'https://openlayers.org/en/v3.20.1/examples/data/geojson/countries.geojson';
fetch(url).then(function (response) {
  return response.json();
}).then(function (json) {
  var tileIndex = geojsonvt(json, {
    extent: 4096,
    debug: 1
  });
  var vectorFeatures = new ol.Collection();
  var vectorSource = new ol.source.VectorTile({
    format: new ol.format.GeoJSON(),
    tileGrid: ol.tilegrid.createXYZ(),
    tilePixelRatio: 16,
    tileLoadFunction: function (tile) {
      var format = tile.getFormat();
      var tileCoord = tile.getTileCoord();
      var data = tileIndex.getTile(tileCoord[0], tileCoord[1], -tileCoord[2] - 1);

      var features = format.readFeatures(
        JSON.stringify({
          type: 'FeatureCollection',
          features: data ? data.features : []
        }, replacer));

      var z = tileCoord[0];
      var z2 = 1 << tileCoord[0];
      var tx = tileCoord[1];
      var ty = -tileCoord[2] - 1;
      var extent = 4096;

      var transform = function (coordinates, output, dimensions) {
        var dims = dimensions || 2;
        for (var i = 0; i < coordinates.length; i += dims) {
          var x = (coordinates[i] / extent + tx) / z2;
          var y = (coordinates[i + 1] / extent + (ty)) / z2;
          var c = [((x - 0.5) * 2) * 6378137 * Math.PI, -((y - 0.5) * 2) * 6378137 * Math.PI];
          coordinates[i] = c[0];
          coordinates[i + 1] = c[1];
        }
        return coordinates;
      }

      features.forEach(function (feature) {
        feature.getGeometry().applyTransform(transform);
      });
      console.log(features);
      vectorFeatures.extend(features);

      tile.setLoader(function () {
        tile.setFeatures(features);
        tile.setProjection(ol.proj.get('EPSG:3857'));
      });
    },
    tileUrlFunction: function (tileCoord) {
      return [tileCoord[0], tileCoord[1], -tileCoord[2] - 1];
    }
  });
  var vectorLayer = new ol.layer.VectorTile({
    source: vectorSource
  });


  map.addLayer(vectorLayer);
  var draw = new ol.interaction.Draw({
    type: 'LineString'
  });
  map.addInteraction(draw);
  var snap = new ol.interaction.Snap({
    features: vectorFeatures
  });
  map.addInteraction(snap);
  map.addControl(new ol.control.MousePosition());
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2
  })
});


