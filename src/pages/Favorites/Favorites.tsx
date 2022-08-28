import { useEffect } from "react";
import FavoritePreviewList from "../../component/FavoritePreviewList/FavoritePreviewList";
import FavoritesButton from "../../component/FavoritesButton/FavoritesButton";
import LoadingModal from "../../component/LoadingModal/LoadingModal";
import { ArticleState } from "../../interfaces/ArticlesInterfaces";
import { PaginationState } from "../../interfaces/PagesInterfaces";
import { UiState } from "../../interfaces/UiInterfaces";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadFavoritesThunk } from "../../redux/thunks/articleThunks";
import HomeContainer from "../Home/HomeContainer";

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
    <HomeContainer>
      <FavoritesButton />
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          <FavoritePreviewList />
        </>
      )}
    </HomeContainer>
  );
};

export default Favorites;
