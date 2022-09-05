import {Feature} from '@/interfaces/places'

export interface placesState {
    isLoading: boolean,
    userLocation?: [number, number], // lng lat
    isLoadingPlaces: boolean,
    places: Feature[],
}

function state(): placesState {
    return {
        isLoading: true,
        userLocation: undefined,
        isLoadingPlaces: false,
        places: [],
    }
}

export default state