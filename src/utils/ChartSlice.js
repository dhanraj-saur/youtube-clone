import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constants";

const ChartSlice = createSlice({
    name: "chat",
    initialState: {
        massages: []
    },
    reducers: {
        addMassage: (state, action) => {
            state.massages.splice(OFFSET_LIVE_CHAT,1)
            state.massages.push(action.payload)
        }
    }
})

export const { addMassage } = ChartSlice.actions;
export default ChartSlice.reducer;