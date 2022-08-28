import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Article,
  ArticleState,
  Favorite,
} from "../../interfaces/ArticlesInterfaces";

const initialState = {
  filter: localStorage.getItem("filter") ?? "",
  favorites: JSON.parse(localStorage.getItem("favorites") ?? "[]"),
  collection: [],
  favoriteCollection: [],
} as ArticleState;

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    resetCollection: (articles) => ({
      ...articles,
      collection: [],
    }),
    loadCollection: (articles, action: PayloadAction<Article[]>) => ({
      ...articles,
      collection: action.payload,
    }),
    loadFavoritesCollection: (articles, action: PayloadAction<Favorite[]>) => ({
      ...articles,
      favoriteCollection: action.payload,
    }),
    filter: (articles, action: PayloadAction<string>) => ({
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
  loadFavoritesCollection: loadFavoritesCollectionActionCreator,
  filter: filterActionCreator,
  addToFavorites: addToFavoritesActionCreator,
  deleteFromFavorites: deleteFromFavoritesActionCreator,
} = articlesSlice.actions;

export default articlesSlice.reducer;
