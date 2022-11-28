import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dogs } from "../types";

const initialStateDogs: Dogs = [];

const dogsSlice = createSlice({
  name: "dogs",
  initialState: initialStateDogs,
  reducers: {
    loadDogs: (previousState, action: PayloadAction<Dogs>): Dogs =>
      action.payload,
  },
});

export const dogsReducer = dogsSlice.reducer;
export const { loadDogs: loadDogsActionCreator } = dogsSlice.actions;
