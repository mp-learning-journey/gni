// store, action, reducer
// createStore, configureStore
// slice - createSlice

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import todoReducer from "./reducers/todoSlice";
import cartReducer from "./reducers/cartSlice";

const rootReducer = combineReducers({
    count: counterReducer,
    todo: todoReducer,
    cart: cartReducer
})

const  store = configureStore(
    {
        reducer: rootReducer
    }
);

export default store;