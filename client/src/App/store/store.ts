import { configureStore } from "@reduxjs/toolkit";
import ImageWindowSlice from "../../pages/Skin/store/ImageWindowSlice";
import UserDataSlice from "./slices/UserDataSlice";

export const store = configureStore({
    reducer:{
        ImageWindow:ImageWindowSlice,
        UserData:UserDataSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch