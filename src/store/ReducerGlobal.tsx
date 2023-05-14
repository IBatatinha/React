import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useLayoutEffect } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";

const INITIAL_STATE:any = {

};


const GlobalReducer = createSlice({
    name: "global",
    initialState: INITIAL_STATE,
    reducers: {},
});

export default GlobalReducer.reducer;
export const {} = GlobalReducer.actions;
export const useGlobal = (state: any) => state.global;
