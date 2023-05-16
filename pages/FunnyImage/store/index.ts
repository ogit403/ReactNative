import { configureStore } from '@reduxjs/toolkit';
import listSlice from './slice/list.slice';

const store = configureStore({
    reducer: {
        list: listSlice,
    },
});

export default store;