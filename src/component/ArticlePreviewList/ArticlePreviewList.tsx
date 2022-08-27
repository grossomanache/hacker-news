import { ArticleCollection } from "../../interfaces/ArticlesInterfaces";
import { useAppSelector } from "../../redux/store/hooks";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import ArticlePreviewListContainer from "./ArticlePreviewListContainer";

const ArticlePreviewList = (): JSX.Element => {
  const { collection }: ArticleCollection = useAppSelector(
    (state) => state.articles
  );
  return (
    <ArticlePreviewListContainer>
      <>
        {collection.length > 0 &&
          collection.map((article) => {
            const { author, creationDate, title } = article;
            return (
              <ArticlePreview
                author={author}
                like={true}
                time={"2"}
                title={title}
              />
            );
          })}
      </>
    </ArticlePreviewListContainer>
  );
};

export default ArticlePreviewList;
