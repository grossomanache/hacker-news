import { useEffect } from "react";
import ArticlePreviewList from "../../component/ArticlePreviewList/ArticlePreviewList";
import FavoritesButton from "../../component/FavoritesButton/FavoritesButton";
import Filter from "../../component/Filter/Filter";
import LoadingModal from "../../component/LoadingModal/LoadingModal";
import Pagination from "../../component/Pagination/Pagination";
import { ArticleState } from "../../interfaces/ArticlesInterfaces";
import { PaginationState } from "../../interfaces/PagesInterfaces";
import { UiState } from "../../interfaces/UiInterfaces";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadFavoritesThunk } from "../../redux/thunks/articleThunks";
import FavoritesContainer from "./FavoritesContainer";

const Favorites = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { page }: PaginationState = useAppSelector(({ page }) => page);
  const { loading }: UiState = useAppSelector(({ ui }) => ui);
  const { favorites }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );
  useEffect(() => {
    dispatch(loadFavoritesThunk({ favorites, page }));
  }, [dispatch, favorites, page]);
  return (
    <FavoritesContainer>
      <FavoritesButton />
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          <ArticlePreviewList />
          <Pagination page={page} />
        </>
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
