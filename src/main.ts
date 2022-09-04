import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/styles.scss'
// @ts-ignore
import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'access-token';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation')
    throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
