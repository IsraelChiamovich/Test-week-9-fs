// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import floorReducer from './floorreducer';
import roleReducer from './rolereducer';

const store = configureStore({
    reducer: {
        floorAccess: floorReducer,
        role: roleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store