import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStoreDev(initialState) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvarient()))
    );
}

// reduxImmutableStateInvarient: warns if the redux store is mutated.
