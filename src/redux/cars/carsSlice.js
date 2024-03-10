import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, firstCars } from './operations'

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
    filterTerm: 'Enter to text',
    filterTermCars: [],
    isIconActive: false,
}
export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        changePage(state, actions) {
            state.page = actions.payload
        },
        setFilterTerm(state, actions) {
            state.filterTerm = actions.payload
        },
        setFilterTermCars(state, actions) {
            state.filterTermCars = actions.payload
        },
        changeViewIconSelect(state, actions) {
            state.isIconActive = actions.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, handlePending)
        builder.addCase(firstCars.pending, handlePending)
        builder.addCase(fetchCars.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;

            state.auto = [...state.auto, ...actions.payload];
        })
        builder.addCase(firstCars.fulfilled, (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.auto = actions.payload;
        })
        builder.addCase(fetchCars.rejected, handleRejected)
        builder.addCase(firstCars.rejected, handleRejected)
    },
})

export const { changePage, setFilterTerm, setFilterTermCars, changeViewIconSelect } = carsSlice.actions;
