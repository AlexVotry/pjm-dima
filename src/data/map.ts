import MapView from 'esri/views/MapView';
// import WebMap from 'esri/WebMap';
import Map from 'esri/Map';
import VectorTileLayer from 'esri/layers/VectorTileLayer';
import GeoJSONLayer from 'esri/layers/GeoJSONLayer';

import Expand from 'esri/widgets/Expand';
import Legend from 'esri/widgets/Legend';

import { WebMapId } from '../config';
import { initLayer } from './initiallLayer';



// this was an attempt to add geojson as a vector tile.  Please show the correct way to do this.
export const vt_layer = new VectorTileLayer({
    style: {
        version: 8,
        sources: {
            geojson_line: {
                type: 'geojson',
                data: './trunc_lines_geojson.json'
            }
        },
        layers: [
            {
                layout: {},
                paint: {
                    "line-color": "#ff0000",
                },
                source: "geojson_line",
                minzoom: 0,
                type: "line",
                id: "transmission Line"
            }
        ]
    }
})

// I would like a list of possible "source-layer" so I know what I would be able to change.
const vtLayer = new VectorTileLayer({
    style: initLayer
});

export const map = new Map({
    basemap: 'dark-gray-vector'
    // layers: [vtLayer, geoJSONLayer]
});

export const view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [-75.1652, 39.9526],
    zoom: 5.5
});
const geoJSONLayer = new GeoJSONLayer({
    id: "earthquakes",
    url: "https://web-who.integralgis.local/pjm/DIMA_DataEngineCache/trunc_lines_geojson.json",
});
map.add(vtLayer);
// map.add(vt_layer);
map.add(geoJSONLayer);
// add a legend widget instance to the view
// and set the style to 'card'. This is a
// responsive style, which is good for mobile devices
// export const legend = new Expand({
//     content: new Legend({
//         view,
//         style: 'card',
//     }),
//     view,
//     expanded: true,
// });
// view.ui.add(legend, 'bottom-left');

/**
 * Assigns the container element to the View
 * @param container
 */
export const initialize = (container: HTMLDivElement) => {
    view.container = container;
    view.when()
        .then(_ => {
            console.log('Map and View are ready');
        })
        .catch(error => {
            console.warn('An error in creating the map occured:', error);
        });
};
