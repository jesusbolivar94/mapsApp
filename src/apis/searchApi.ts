import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 3,
        language: 'es',
        access_token: 'pk.eyJ1IjoiajVyb2pvIiwiYSI6ImNsN210bGY5aTBjdHIzeG95OXJqZW9qc3gifQ.h2uQYLxlP2p8yttgGlp4xA'
    }
})

export default searchApi