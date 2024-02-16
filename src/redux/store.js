import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import apiSlice from './slices/apiSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        api: apiSlice,
        user: userSlice,
    }
})

export default store;