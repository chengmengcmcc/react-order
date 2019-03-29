import { createStore } from 'redux';
import navReducer from './reducers';

const store = createStore(navReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;