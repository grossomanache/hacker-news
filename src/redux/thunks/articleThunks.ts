import axios from "axios";
import {
  filterActionCreator,
  loadCollectionActionCreator,
  loadFavoritesCollectionActionCreator,
  resetCollectionActionCreator,
} from "../features/articlesSlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";
import { AppDispatch } from "../store/store";
import { GetArticlesProps, GetFavoritesProps } from "./articleThunksTypes";

const hackerNewsUrl = "https://hn.algolia.com/api/v1/";

export const loadArticlesThunk =
  ({ searchTerm = "", page = 0 }: GetArticlesProps) =>
  async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator());
    dispatch(resetCollectionActionCreator());
    dispatch(filterActionCreator(searchTerm));
    localStorage.setItem("filter", searchTerm);
    const query = `${hackerNewsUrl}search_by_date?query=${searchTerm}&page=${page}&hitsPerPage=12`;
    const {
      data: { hits: articles },
    } = await axios.get(query);
    dispatch(loadCollectionActionCreator(articles));
    dispatch(finishedLoadingActionCreator());
  };

export const loadFavoritesThunk =
  ({ favorites, page = 0 }: GetFavoritesProps) =>
  async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator());
    dispatch(resetCollectionActionCreator());
    const favoritesIdUrls: string[] = [];
    const queryUrl = `${hackerNewsUrl}items/`;
    favorites.forEach((favoriteId) => {
      favoritesIdUrls.push(queryUrl + favoriteId);
    });
    const response: any[] = await axios.all(
      favoritesIdUrls.map(async (favoriteUrl) => axios.get(favoriteUrl))
    );
    const favoritesWithInformation = response.map(({ data }) => data);
    dispatch(loadFavoritesCollectionActionCreator(favoritesWithInformation));

    dispatch(finishedLoadingActionCreator());
  };
