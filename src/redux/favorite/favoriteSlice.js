import { createSlice } from '@reduxjs/toolkit';

const favoriteInitialState = {
    listFavoriteCars: [],

};
export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: favoriteInitialState,
    reducers: {
        addFavoriteCar(state, actions) {
            state.listFavoriteCars.push(actions.payload)
        },
        removeFavoriteCar(state, actions) {
            const index = state.listFavoriteCars.findIndex(car => car.id === actions.payload.id)
            state.listFavoriteCars.splice(index, 1)
        },
    },
});

export const { addFavoriteCar, removeFavoriteCar, changeClass } = favoriteSlice.actions;