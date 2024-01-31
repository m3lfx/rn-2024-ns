import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import cartItems from './Reducers/cartItems';
const reducers = combineReducers({
    cartItems: cartItems,
})

const store = createStore(
    reducers,
    applyMiddleware(thunkMiddleware),
)

export default store;