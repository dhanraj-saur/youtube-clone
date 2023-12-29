import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import ChartSlice from "./ChartSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: ChartSlice
    }
})

export default store;