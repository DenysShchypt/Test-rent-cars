import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import { favoriteSlice } from "./favorite/favoriteSlice";

const carsConfig = {
    key: 'favorite',
    storage,
    whitelist: 'favorite',
};
const rootReducer = combineReducers({
    cars: carsSlice.reducer,
    modal: modalSlice.reducer,
    favorite: favoriteSlice.reducer
});
const persistedReducer = persistReducer(carsConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);