import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice"
import cardsReducer from "../Cards/sliceCards"
// import cardsR from "../Cards/sliceCards"


export const store = configureStore({
    reducer:{
        auth:authReducer,
        cards:cardsReducer,
    },
});