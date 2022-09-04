import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { placesState } from './places/state';
import mapModule from './map';
import { MapState } from './map/state';

export interface StateInterface {
    // Define your own store structure, using submodules if needed
    // example: MapState;
    // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
    // example: MapState
    places: placesState,
    map: MapState
}

export default createStore<StateInterface>({
    modules: {
        // example: mapModule
        places: placesModule,
        map: mapModule,
    }
})