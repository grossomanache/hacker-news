import axios from "axios";
import {
  filterActionCreator,
  loadCollectionActionCreator,
} from "../features/articlesSlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";
import { AppDispatch } from "../store/store";
import { GetArticlesProps } from "./articleThunksTypes";

const hackerNewsUrl = "https://hn.algolia.com/api/v1/";

export const loadArticlesThunk =
  ({ searchTerm = "", page = 0 }: GetArticlesProps) =>
  async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator());
    dispatch(filterActionCreator(searchTerm));
    localStorage.setItem("filter", searchTerm);
    const query = `${hackerNewsUrl}search_by_date?query=${searchTerm}&page=${page}&hitsPerPage=12`;
    const {
      data: { hits: articles },
    } = await axios.get(query);
    dispatch(loadCollectionActionCreator(articles));
    dispatch(finishedLoadingActionCreator());
  };
