import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from './operations'

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const carsSlice = createSlice({
    name: "cars",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, handlePending)
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.cars = action.payload;
        })
        builder.addCase(fetchCars.rejected, handleRejected)
    }
})
