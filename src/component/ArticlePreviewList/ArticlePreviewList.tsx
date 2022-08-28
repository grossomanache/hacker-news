import { ArticleState } from "../../interfaces/ArticlesInterfaces";
import { useAppSelector } from "../../redux/store/hooks";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import ArticlePreviewListContainer from "./ArticlePreviewListContainer";

const ArticlePreviewList = (): JSX.Element => {
  const { collection }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );
  return (
    <ArticlePreviewListContainer>
      {collection.length > 0 &&
        collection.map((article, index) => {
          console.log(article);
          return <ArticlePreview article={article} />;
        })}
    </ArticlePreviewListContainer>
  );
};

export default ArticlePreviewList;
