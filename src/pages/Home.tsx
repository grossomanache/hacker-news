import { useEffect } from "react";
import ArticlePreview from "../component/ArticlePreview/ArticlePreview";
import NavBar from "../component/NavBar/NavBar";
import { useAppDispatch } from "../redux/store/hooks";
import { loadArticlesThunk } from "../redux/thunks/articleThunks";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadArticlesThunk({ technology: "angular", page: 0 }));
  });
  return (
    <>
      <NavBar />
      <ArticlePreview
        author="Author"
        time="3"
        like={true}
        title="React article"
      />
    </>
  );
};

export default Home;
