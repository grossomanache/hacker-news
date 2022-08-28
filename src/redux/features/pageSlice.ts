import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationState } from "../../interfaces/PagesInterfaces";

const initialState = {
  page: 1,
} as PaginationState;

const pageSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (pagination: PaginationState) => ({
      ...pagination,
      page: pagination.page + 1,
    }),
    previousPage: (pagination: PaginationState) => ({
      ...pagination,
      page: pagination.page - 1,
    }),
    changePage: (
      pagination: PaginationState,
      action: PayloadAction<number>
    ) => ({
      ...pagination,
      page: action.payload,
    }),
  },
});

export const {
  nextPage: nextPageActionCreator,
  previousPage: previousPageActionCreator,
  changePage: changePageActionCreator,
} = pageSlice.actions;
export default pageSlice.reducer;
