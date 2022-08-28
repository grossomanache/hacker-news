import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../interfaces/UiInterfaces";

const initialState = {
  loading: false,
  myFaves: false,
} as UiState;

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui: UiState) => ({
      ...ui,
      loading: true,
    }),
    finishedLoading: (ui: UiState) => ({
      ...ui,
      loading: false,
    }),
    toggleMyFaves: (ui: UiState) => ({ ...ui, myFaves: !ui.myFaves }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
