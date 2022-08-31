export interface placesState {
    isLoading: boolean,
    userLocation?: [number, number] // lng lat
}

function state(): placesState {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state;