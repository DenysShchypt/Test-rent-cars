import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://65d61b2df6967ba8e3bd85bb.mockapi.io/rent-cars";

export const fetchCars = createAsyncThunk('cars/catalog', async (page, thunkAPI) => {
    try {
        const { data } = await axios.get(`/${page}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

});

// export const  = createAsyncThunk('cars/favorites', async (_, thunkAPI) => {
//     try {
//         const { data } = await axios.get('/favorites');
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// });

// export const oneCars = createAsyncThunk('cars/oneCars', async (carsId, thunkAPI) => {
//     try {
//         const { data } = await axios.get(`/cars/${carsId}`);
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// });