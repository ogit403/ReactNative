import { configureStore } from '@reduxjs/toolkit';
import viewSlice from './slices/view';
import favoriteSlice from './slices/favorite';

export const foodStore = configureStore({
    reducer: {
        [viewSlice.name]: viewSlice.reducer,
        [favoriteSlice.name]: favoriteSlice.reducer, 
    }
});

export type RootState = ReturnType<typeof foodStore.getState>;

export type AppDispatch = typeof foodStore.dispatch;