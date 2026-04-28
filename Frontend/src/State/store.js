import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk'; // Sửa thành named import
import { authReducer } from './Reducer';
import { customerProductReducer } from './Product/Reducer';
import { cartReducer } from "./Cart/Reducer";

const rootReducers = combineReducers({
    auth: authReducer,
    products:customerProductReducer,
    cart: cartReducer,  

});

export const store = legacy_createStore(
    rootReducers, 
    applyMiddleware(thunk)
);