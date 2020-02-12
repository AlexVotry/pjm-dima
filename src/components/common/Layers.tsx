// import { useState, useEffect } from 'react';
// import FeatureLayer from 'esri/layers/FeatureLayer';
// import VectorTileLayer from 'esri/layers/VectorTileLayer';

// export const vtLayer = new VectorTileLayer({
//   style: {
//     version: 8,
//     name: "temp",
//     sources: {
//       geojson_line: {
//         type: 'geojson',
//         data: './trunc_lines_geojson.json'
//       }
//     },
//     layers: [{
//       id: "lines",
//       source: 'geojson_line',
//       type: 'line',
//       layout: {
//         "line-color": '#0000ff',
//       },
//       paint: {
//         "line-width": 1
//       }
//     }],
//   }
// })

// const Layers = (props) => {
//   const [layer, setLayer] = useState(null);

//   useEffect(() => {
//     const newLayer = vtLayer;

//     setLayer(newLayer);
//     props.map.add(layer);

//     return function cleanup() {
//       props.map.remove(layer);
//     }

//   }, [props]);

//   return null;
// }

// export default Layers;
