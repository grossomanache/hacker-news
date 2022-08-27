import axios from "axios";
import {
  filterActionCreator,
  loadActionCreator,
} from "../features/articlesSlice";
import { AppDispatch } from "../store/store";
import { GetArticlesProps } from "./articleThunksTypes";

const hackerNewsUrl = "https://hn.algolia.com/api/v1/";

export const loadArticlesThunk =
  ({ searchTerm = "", page = 0 }: GetArticlesProps) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(filterActionCreator(searchTerm));
      localStorage.setItem("filter", searchTerm);
      const query = `${hackerNewsUrl}search_by_date?query=${searchTerm}&page=${page}&hitsPerPage=8`;
      const {
        data: { hits: articles },
      } = await axios.get(query);
      dispatch(loadActionCreator(articles));
    } catch (error) {
    } finally {
    }
  };
