import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { items: string[] } = {
    items: []
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addProductInView: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            const item = state.items.find((el: string) => el === payload);
            if (item) {
                state.items = state.items.filter((el: string) => el !== payload);
            } else {
                state.items = [...new Set([payload, ...state.items])];
            }
        },
        clearAllView: (state) => {
            state.items = []
        }
    },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;