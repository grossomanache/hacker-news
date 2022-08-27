import axios from "axios";
import { AppDispatch } from "../store/store";
import { GetArticlesProps } from "./articleThunksTypes";

const hackerNewsUrl = "https://hn.algolia.com/api/v1/";

export const loadArticlesThunk =
  ({ searchTerm, page }: GetArticlesProps) =>
  async (dispatch: AppDispatch) => {
    try {
      const query = `${hackerNewsUrl}search_by_date?query=${searchTerm}&page=${page}`;
      const {
        data: { hits: articles },
      } = await axios.get(query);
    } catch (error) {
    } finally {
    }
  };
