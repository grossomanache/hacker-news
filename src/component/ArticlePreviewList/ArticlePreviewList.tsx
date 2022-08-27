import ArticlePreview from "../ArticlePreview/ArticlePreview";
import ArticlePreviewListContainer from "./ArticlePreviewListContainer";

const ArticlePreviewList = (): JSX.Element => {
  return (
    <ArticlePreviewListContainer>
      <ArticlePreview
        author="Author"
        time="3"
        like={true}
        title="React article"
      />
    </ArticlePreviewListContainer>
  );
};

export default ArticlePreviewList;
