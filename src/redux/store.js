import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { carsSlice } from "./cars/carsSlice";
import { modalSlice } from "./modal/modalSlice";
// import { filterSlice } from "./cars/filterSlice";
const carsConfig = {
    key: 'cars',
    storage,
    whitelist: ['cars'],
};

export const store = configureStore({
    reducer: {
        cars: persistReducer(carsConfig, carsSlice.reducer),
        modal: modalSlice.reducer,
        // filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export const persistor = persistStore(store);