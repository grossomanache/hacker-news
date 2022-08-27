import { useEffect } from "react";
import ArticlePreviewList from "../component/ArticlePreviewList/ArticlePreviewList";
import Filter from "../component/Filter/Filter";
import NavBar from "../component/NavBar/NavBar";
import { useAppDispatch } from "../redux/store/hooks";
import { loadArticlesThunk } from "../redux/thunks/articleThunks";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadArticlesThunk({}));
  });
  return (
    <>
      <Filter />
      <ArticlePreviewList />
    </>
  );
};

export default Home;
