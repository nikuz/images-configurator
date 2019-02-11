
import {
    applyMiddleware,
    createStore,
    compose,
    combineReducers,
} from 'redux';
import reduxLogger from 'redux-logger';
import configuratorReducer from '../src/reducer';

export default createStore(
    combineReducers({
        configurator: configuratorReducer,
    }),
    compose(
        applyMiddleware(reduxLogger)
    )
);
