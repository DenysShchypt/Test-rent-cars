import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from './operations'

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
const initialState = {
    page: 1,
    typeCars: []
}
export const carsSlice = createSlice({
    name: "cars",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, handlePending)
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.cars.typeCars = action.payload.typeCars;
            state.cars.page = action.payload.page;
        })
        builder.addCase(fetchCars.rejected, handleRejected)
    }
})
