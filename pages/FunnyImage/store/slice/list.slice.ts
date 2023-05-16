import { createSlice } from "@reduxjs/toolkit";

export interface ItemType {
    id: number;
    status: string;
}

const initialState: { items: ItemType[] } = {
    items: []
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            const item = state.items.find((el: ItemType) => el.id === payload.id);
            if (!item) {
                return { ...state, items: [...state.items, payload] }
            }
            return { ...state, items: [...state.items.map((el: ItemType) => {
                const newItem = { ...el };
                if (newItem.id === payload.id) {
                    newItem.status = payload.status;
                };
                return { ...newItem }
            })] }
        },
        removeItem: (state, { payload }) => {
            return { ...state, items: [...state.items.filter((el: ItemType) => el.id !== payload)] }
        }
    },
});

export const listActions = listSlice.actions;

export default listSlice.reducer;