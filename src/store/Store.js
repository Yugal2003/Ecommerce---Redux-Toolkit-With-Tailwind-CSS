import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const store = configureStore({
    reducer : {
        allCart : CartSlice
    }
})

export default store;