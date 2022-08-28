import { ArticleState } from "../../interfaces/ArticlesInterfaces";
import { useAppSelector } from "../../redux/store/hooks";
import ArticlePreviewListContainer from "../ArticlePreviewList/ArticlePreviewListContainer";
import FavoritePreview from "../FavoritePreview/FavoritePreview";

const FavoritePreviewList = (): JSX.Element => {
  const { favoriteCollection }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );
  return (
    <ArticlePreviewListContainer>
      {favoriteCollection.length > 0 &&
        favoriteCollection.map((article, index) => {
          return <FavoritePreview article={article} key={index} />;
        })}
    </ArticlePreviewListContainer>
  );
};

export default FavoritePreviewList;
