// src/store/floorreducer.ts

import { createSlice } from "@reduxjs/toolkit";


interface FloorAccessState {
    floorAccess: boolean[];
}

const initialState: FloorAccessState = {
    floorAccess: [false, false, false, false, false],
}

const floorSlice = createSlice({
    name: "floorAccess",
    initialState,
    reducers: {
        changeAccess: () => {}
    }
})