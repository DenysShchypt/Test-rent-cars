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
    auto: [],
    filterTerm: '',
    filterTermCars: []
}
export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        changePage(state, actions) {
            state.page = actions.payload
        },
        setFilterTerm(state, action) {
            state.filterTerm = action.payload
        },
        setFilterTermCars(state, action) {
            state.filterTermCars = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, handlePending)
        builder.addCase(fetchCars.fulfilled, (state, actions) => {
            console.log(actions.payload);
            state.isLoading = false;
            state.error = null;
            state.auto = [...state.auto, ...actions.payload];
        })
        builder.addCase(fetchCars.rejected, handleRejected)
    }
})

export const { changePage, setFilterTerm, setFilterTermCars } = carsSlice.actions;
