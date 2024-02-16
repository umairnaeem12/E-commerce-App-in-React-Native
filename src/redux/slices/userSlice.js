import { createSlice,  } from '@reduxjs/toolkit';

const initialState = {
    userDetail: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userData: (state, action) => {
            state.userDetail = action.payload; // Direct assignment is fine with Redux Toolkit's Immer
        },
    },
});

export const { userData } = userSlice.actions;

export default userSlice.reducer;
