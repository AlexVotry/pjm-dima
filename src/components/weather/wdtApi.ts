import axios from 'axios';
// import esriConfig from 'esri/config';
// import urlUtils from 'esri/core/urlUtils';
// import esriRequest from 'esri/request';

// esriConfig.portalUrl = 'https://gisweb.wdtinc.com/arcgis';
// esriConfig.request.proxyUrl = 'wdt.ashx';

export function wdt() {
    // urlUtils.addProxyRule({
    //     urlPrefix: 'https://gisweb.wdtinc.com/arcgis',
    //     proxyUrl: "wdt.ashx"
    // });

    // const url = 'https://gisweb.wdtinc.com/arcgis/rest/services/Radar/CONUS_Radar_Loop/MapServer/0/query?f=json&where=objectid%3E%3D0&returnGeometry=false&spatialRel=esriSpatialRelEnvelopeIntersects&outFields=datetime&returnDistinctValues=true&orderByFields=datetime&outSR=3857';

    // return esriRequest(url, {
    //     responseType: 'json'
    // });

    return axios.get('http://localhost:5000/api/radar-dates');
}

// export function getToken() {
//     return axios.post('https://gisweb.wdtinc.com/arcgis/tokens/generateToken', {
//         username: 'pjm_gis',
//         password: 'wdtWXd@t@',
//         referer: 'http://localhost:8081',
//     });
// }
