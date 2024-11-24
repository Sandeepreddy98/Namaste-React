import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from './wishlistSlice.js';

const appStore = configureStore({
    reducer : {
        wishlist : wishlistReducer
    }
})

export default appStore