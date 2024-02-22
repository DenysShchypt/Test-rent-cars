import { createSelector } from "@reduxjs/toolkit";

export const selectCars = state => state.cars;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
export const selectFilter = state => state.filter;

export const selectVisibleCars = createSelector([selectCars, selectFilter], (carsMake, carsFilter) => {
    return carsMake.filter(car => {
        if (carsFilter.trim() === '') {
            return car;
        }
        return car.make.toLowerCase().includes(carsFilter.toLowerCase());
    });
})