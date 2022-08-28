import { useEffect } from "react";
import ArticlePreviewList from "../component/ArticlePreviewList/ArticlePreviewList";
import Filter from "../component/Filter/Filter";
import LoadingModal from "../component/LoadingModal/LoadingModal";
import Pagination from "../component/Pagination/Pagination";
import { ArticleState } from "../interfaces/ArticlesInterfaces";
import { PaginationState } from "../interfaces/PagesInterfaces";
import { UiState } from "../interfaces/UiInterfaces";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadArticlesThunk } from "../redux/thunks/articleThunks";
import HomeContainer from "./HomeContainer";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page }: PaginationState = useAppSelector(({ page }) => page);
  const { loading }: UiState = useAppSelector(({ ui }) => ui);
  const { favorites }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );
  const keyword = localStorage.getItem("filter") as string;
  localStorage.setItem("favorites", JSON.stringify(favorites));
  useEffect(() => {
    dispatch(loadArticlesThunk({ searchTerm: keyword, page }));
  }, [dispatch, page, keyword]);
  return (
    <HomeContainer>
      <Filter />
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          <ArticlePreviewList />
          <Pagination page={page} />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
