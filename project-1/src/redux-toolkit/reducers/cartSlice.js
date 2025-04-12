import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: 'Laptop', price: 2500 },
        { id: 2, name: 'Phone', price: 1200 },
        { id: 3, name: 'Headphones', price: 300 },
        { id: 4, name: 'Smartwatch', price: 450 }
    ],
    cart: [],
    totalPrice: 0
}

const calculatePrice = (products, productId, quantity) => {
    const product = products.find((product) => product.id === productId)
    return product.price * quantity;
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {price} = action.payload;
            state.cart.push({...action.payload, quantity: 1});
            state.totalPrice = state.totalPrice + price
        },
        removeFromCart: (state, action) => {

        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;