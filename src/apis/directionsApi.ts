import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiajVyb2pvIiwiYSI6ImNsN210bGY5aTBjdHIzeG95OXJqZW9qc3gifQ.h2uQYLxlP2p8yttgGlp4xA'
    }
})

export default directionsApi