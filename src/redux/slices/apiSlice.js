import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create Action 
export const FetchData = createAsyncThunk('Fetch', async () => {
    const response = await fetch('https://fake-store-api.mock.beeceptor.com/api/products');
    // const response = await fetch('https://fake-store-api.mock.beeceptor.com');
    return response.json();
});

const ApiData = createSlice ({
    name: 'Product Data',
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(FetchData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(FetchData.fulfilled, (state, action) => {
            state.isLoading;
            state.data = action.payload;
        });
        builder.addCase(FetchData.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        })
    }
});

export default ApiData.reducer;