import ArticlePreview from "../component/ArticlePreview/ArticlePreview";
import NavBar from "../component/NavBar/NavBar";

const Home = (): JSX.Element => {
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
