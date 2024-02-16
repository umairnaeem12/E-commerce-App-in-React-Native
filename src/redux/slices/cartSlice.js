import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalItems: 0
}

const cartSlice = createSlice({
    name: 'CartItems',
    initialState: initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = [...state.items, action.payload];
            state.totalItems += 1; // Increment totalItems by 1
        },
        addToCart: (state, action) => {
        },
        removeFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            const indexToRemove = state.items.findIndex(item => item.id === itemIdToRemove);
      
            if (indexToRemove !== -1) {
              state.items.splice(indexToRemove, 1); // Remove 1 item at indexToRemove
              state.totalItems -= 1;
            } else {
              console.log("Item not found in cart");
            }
          },
        emptyCard: (state, action) => {
            state.totalItems = 0
        }
    }
})

export const { addItems, addToCart, removeFromCart, emptyCard } = cartSlice.actions;

export default cartSlice.reducer;