import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { placesState } from './places/state';

export interface StateInterface {
    // Define your own store structure, using submodules if needed
    // example: ExampleStateInterface;
    // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
    // example: ExampleStateInterface
    places: placesState
}

export default createStore<StateInterface>({
    modules: {
        // example: exampleModule
        places: placesModule
    }
})