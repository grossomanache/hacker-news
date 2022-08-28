import { ArticleState } from "../../interfaces/ArticlesInterfaces";
import { useAppSelector } from "../../redux/store/hooks";
import { checkValidityOfArticle } from "../../utils/checkValidityOfArticle";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import ArticlePreviewListContainer from "./ArticlePreviewListContainer";

const ArticlePreviewList = (): JSX.Element => {
  const { collection }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );
  return (
    <ArticlePreviewListContainer>
      {collection.length > 0 &&
        // eslint-disable-next-line array-callback-return
        collection.map((article, index) => {
          if (checkValidityOfArticle(article)) {
            return <ArticlePreview article={article} key={index} />;
          }
        })}
    </ArticlePreviewListContainer>
  );
};

export default ArticlePreviewList;
