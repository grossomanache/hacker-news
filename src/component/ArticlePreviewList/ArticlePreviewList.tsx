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
            const { author, created_at, story_title, story_url } = article;
            return (
              <ArticlePreview
                author={author}
                like={true}
                created_at={created_at}
                story_title={story_title}
                story_url={story_url}
              />
            );
          })}
      </>
    </ArticlePreviewListContainer>
  );
};

export default ArticlePreviewList;
