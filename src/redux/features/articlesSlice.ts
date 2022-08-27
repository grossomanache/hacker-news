import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleCollection } from "../../interfaces/ArticlesInterfaces";

const initialState = {
  collection: [],
} as ArticleCollection;

const articlesSlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
});

export const {} = articlesSlice.actions;

export default articlesSlice.reducer;
