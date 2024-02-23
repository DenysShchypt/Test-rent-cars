import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://65d61b2df6967ba8e3bd85bb.mockapi.io/rent-cars";

export const fetchCars = createAsyncThunk('cars', async (page, thunkAPI) => {
    try {
        const { data } = await axios.get(`?page=${page}&limit=12`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

});
