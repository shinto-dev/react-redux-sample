import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from "./reducers";
import reduxImmutableStateInvarient from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvarient())));
}

// reduxImmutableStateInvarient: warns if the redux store is mutated.
