import { createSlice } from "@reduxjs/toolkit";
import { ArticleState } from "../../interfaces/ArticlesInterfaces";

const initialState = {
  filter: localStorage.getItem("filter"),
  favorites: false,
  collection: [],
} as ArticleState;

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetCollection: (articles) => ({
      ...articles,
      collection: [],
    }),
    loadCollection: (articles, action) => ({
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
  loadCollection: loadCollectionActionCreator,
  filter: filterActionCreator,
  favoritesOn: favoritesOnActionCreator,
  favoritesOff: favoritesOffActionCreator,
} = articlesSlice.actions;

export default articlesSlice.reducer;
