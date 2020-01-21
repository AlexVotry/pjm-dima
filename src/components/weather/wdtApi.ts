import axios from 'axios';

export function wdt(term) {

  return axios.get('https://gisweb.wdtinc.com/arcgis/rest/services/Radar/Future_Radar/MapServer/', {
    proxy: {
      host: 'http://localhost',
      port: 8081,
      auth: {
        username: 'pjm_gis',
        password: 'wdtWXd@t@'
      },
    },
    // params: {query: term}
  });
}

export function getToken() {
  return axios.post('https://sampleserver6.arcgisonline.com/arcgis/tokens/generateToken', {
    username: 'pjm_gis',
    password: 'wdtWXd@t@'
  })
}