import { useEffect } from "react";
import ArticlePreviewList from "../component/ArticlePreviewList/ArticlePreviewList";
import Filter from "../component/Filter/Filter";
import Pagination from "../component/Pagination/Pagination";
import { PaginationState } from "../interfaces/PagesInterfaces";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadArticlesThunk } from "../redux/thunks/articleThunks";
import HomeContainer from "./HomeContainer";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page }: PaginationState = useAppSelector(({ page }) => page);
  useEffect(() => {
    const keyword = localStorage.getItem("filter") as string;
    dispatch(loadArticlesThunk({ searchTerm: keyword, page }));
  });
  return (
    <HomeContainer>
      <Filter />
      <ArticlePreviewList />
      <Pagination page={page} />
    </HomeContainer>
  );
};

export default Home;
