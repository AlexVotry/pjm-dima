export const initLayer = {
    layers: [
        {
            layout: {},
            paint: {
                'line-color': '#ff0000',
            },
            source: 'geojsonLine',
            minzoom: 0,
            type: 'line',
            id: 'transmission Line',
        },
        {
            layout: {},
            paint: {
                'fill-color': '#37475c',
            },
            source: 'esri',
            minzoom: 0,
            'source-layer': 'Land',
            type: 'fill',
            id: 'Land/1',
        },
        {
            id: 'Water area small scale',
            type: 'fill',
            source: 'esri',
            'source-layer': 'Water area small scale',
            layout: {},
            paint: {
                'fill-color': '#282c2d',
                'fill-outline-color': '#B9DFEC',
            },
        },
        {
            id: 'Water area medium scale/Lake or river',
            type: 'fill',
            source: 'esri',
            'source-layer': 'Water area medium scale',
            filter: ['==', '_symbol', 0],
            layout: {},
            paint: {
                'fill-color': '#282c2d',
                'fill-outline-color': '#B9DFEC',
            },
        },
        {
            layout: {},
            paint: {
                'fill-color': '#282c2d',
            },
            source: 'esri',
            minzoom: 0,
            'source-layer': 'Marine area',
            type: 'fill',
            id: 'Marine area/1',
        },
        {
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': '#cccccc',
                'line-dasharray': [7, 5.33333],
                'line-width': 1,
                'fill-color': '#0000ff',
            },
            source: 'esri',
            minzoom: 1,
            'source-layer': 'Boundary line',
            type: 'line',
            id: 'Boundary line/Admin0/0',
        },
    ],
    version: 8,
    sources: {
        esri: {
            url: 'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer',
            type: 'vector',
        },
        geojsonLine: {
            type: 'geojson',
            // url: 'https://web-who.integralgis.local/pjm/DIMA_DataEngineCache/trunc_lines_geojson.json'
            data: './trunc_lines_geojson.json',
        },
    },
};
