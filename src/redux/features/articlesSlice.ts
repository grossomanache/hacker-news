import { createSlice } from "@reduxjs/toolkit";
import { ArticleState } from "../../interfaces/ArticlesInterfaces";

const initialState = {
  collection: [],
  favorites: false,
  filter: null,
} as ArticleState;

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetCollection: (articles) => ({
      ...articles,
      collection: [],
    }),
    load: (articles, action) => ({
      ...articles,
      collection: action.payload,
    }),
    filter: (articles, action) => ({
      ...articles,
      filter: action.payload,
    }),
    favoritesOn: (articles) => ({
      ...articles,
      favorites: true,
    }),
    favoritesOff: (articles) => ({
      ...articles,
      favorites: false,
    }),
  },
});

export const {
  resetCollection: resetCollectionActionCreator,
  load: loadActionCreator,
  filter: filterActionCreator,
  favoritesOn: favoritesOnActionCreator,
  favoritesOff: favoritesOffActionCreator,
} = articlesSlice.actions;

export default articlesSlice.reducer;
