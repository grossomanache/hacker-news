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

    loadCollection: (
      articles: ArticleState,
      action: PayloadAction<Article[]>
    ) => ({
      ...articles,
      collection: action.payload,
    }),

    loadFavoritesCollection: (
      articles: ArticleState,
      action: PayloadAction<Favorite[]>
    ) => ({
      ...articles,
      favoriteCollection: action.payload,
    }),

    filter: (articles: ArticleState, action: PayloadAction<string>) => ({
      ...articles,
      filter: action.payload,
    }),

    addToFavorites: (
      articles: ArticleState,
      action: PayloadAction<number>
    ) => ({
      ...articles,
      favorites: [...articles.favorites, action.payload],
    }),

    deleteFromFavorites: (
      articles: ArticleState,
      action: PayloadAction<number>
    ) => {
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
