import { configureStore } from "@reduxjs/toolkit";
// import { contactsSlice } from "./contacts/contactsSlice";
// import { filterSlice } from "./filterSlice";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";
import { carsSlice } from "./cars/carsSlice";
import { filterSlice } from "./cars/filterSlice";


export const store = configureStore({
    reducer: {
        cars: carsSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export const persistor = persistStore(store);