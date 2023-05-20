import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { items: string[] } = {
    items: []
}

export const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        addProductInView: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            const item = state.items.find((el: string) => el === payload);
            state.items = [...new Set([payload, ...state.items])];
        },
        deleteView: (state, action: PayloadAction<string>) => {
            const { payload } = action;
            state.items = state.items.filter((el: string) => el !== payload);
        },
        clearAllView: (state) => {
            state.items = []
        }
    },
});

export const viewActions = viewSlice.actions;

export default viewSlice;