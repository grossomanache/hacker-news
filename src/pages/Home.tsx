import { useEffect } from "react";
import ArticlePreviewList from "../component/ArticlePreviewList/ArticlePreviewList";
import Filter from "../component/Filter/Filter";
import { useAppDispatch } from "../redux/store/hooks";
import { loadArticlesThunk } from "../redux/thunks/articleThunks";
import HomeContainer from "./HomeContainer";

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const keyword = localStorage.getItem("filter") as string;
    dispatch(loadArticlesThunk({ searchTerm: keyword }));
  });
  return (
    <HomeContainer>
      <Filter />
      <ArticlePreviewList />
    </HomeContainer>
  );
};

export default Home;
