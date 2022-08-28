import { createSlice } from "@reduxjs/toolkit";
import { Ui } from "../../interfaces/UiInterfaces";

const initialState = {
  loading: false,
} as Ui;

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui: Ui) => ({
      ...ui,
      loading: true,
    }),
    finishedLoading: (ui: Ui) => ({
      ...ui,
      loading: false,
    }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
