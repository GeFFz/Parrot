import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import usersSlice from "./user"
import postsSlice from "./post"

const persistConfig = {
    key: "@users",
    storage,
};

const persistedReducer = persistReducer(persistConfig, postsSlice);

export const store = configureStore({
    reducer: {
        usersSlice,
        persistedReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch