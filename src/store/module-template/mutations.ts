import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
    someMutation( /* state: MapState */) {
        // a line to prevent linter errors
    }
}

export default mutation;