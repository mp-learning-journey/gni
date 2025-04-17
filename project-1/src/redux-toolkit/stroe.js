// store, action, reducer
// createStore, configureStore
// slice - createSlice

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import todoReducer from "./reducers/todoSlice";
import cartReducer from "./reducers/cartSlice";
import postReducer from "./reducers/postSlice";

const rootReducer = combineReducers({
    count: counterReducer,
    todo: todoReducer,
    cart: cartReducer,
    post: postReducer
})

const  store = configureStore(
    {
        reducer: rootReducer
    }
);

export default store;