import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleState } from "../../interfaces/ArticlesInterfaces";

const initialState = {
  filter: localStorage.getItem("filter"),
  favorites: [],
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
    addToFavorites: (articles, action: PayloadAction<number>) => ({
      ...articles,
      favorites: [...articles.favorites, action.payload],
    }),
    deleteFromFavorites: (articles, action: PayloadAction<number>) => {
      const updatedCollection = articles.favorites.filter(
        (article) => article !== action.payload
      );

      return {
        ...articles,
        favorites: updatedCollection,
      };
    },
  },
});

export const {
  resetCollection: resetCollectionActionCreator,
  loadCollection: loadCollectionActionCreator,
  filter: filterActionCreator,
  addToFavorites: addToFavoritesActionCreator,
  deleteFromFavorites: deleteFromFavoritesActionCreator,
} = articlesSlice.actions;

export default articlesSlice.reducer;
