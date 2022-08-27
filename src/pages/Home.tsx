import { useEffect } from "react";
import ArticlePreviewList from "../component/ArticlePreviewList/ArticlePreviewList";
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
      <NavBar />
      <ArticlePreviewList />
    </>
  );
};

export default Home;
