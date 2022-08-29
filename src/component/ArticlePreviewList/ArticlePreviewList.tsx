import { Article, ArticleState } from "../../interfaces/ArticlesInterfaces";
import { useAppSelector } from "../../redux/store/hooks";
import { checkValidityOfArticle } from "../../utils/checkValidityOfArticle";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import ArticlePreviewListContainer from "./ArticlePreviewListContainer";

const ArticlePreviewList = (): JSX.Element => {
  const { collection }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );

  const uniqueIds: number[] = [];
  const filteredCollection: Article[] = [];

  collection.forEach((article) => {
    if (!uniqueIds.includes(article.story_id)) {
      filteredCollection.push(article);
      uniqueIds.push(article.story_id);
    }
  });
  return (
    <ArticlePreviewListContainer>
      {collection.length > 0 &&
        // eslint-disable-next-line array-callback-return
        filteredCollection.map((article, index) => {
          if (checkValidityOfArticle(article)) {
            return <ArticlePreview article={article} key={index} />;
          }
        })}
    </ArticlePreviewListContainer>
  );
};

export default ArticlePreviewList;
