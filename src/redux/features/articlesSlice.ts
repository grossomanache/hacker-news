import { createSlice } from "@reduxjs/toolkit";
import { ArticleCollection } from "../../interfaces/ArticlesInterfaces";

const initialState = {
  collection: [],
} as ArticleCollection;

const articlesSlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    resetCollection: () => ({
      collection: [],
    }),
    load: (diary, action) => ({
      collection: action.payload,
    }),
  },
});

export const {
  resetCollection: resetCollectionActionCreator,
  load: loadActionCreator,
} = articlesSlice.actions;

export default articlesSlice.reducer;
