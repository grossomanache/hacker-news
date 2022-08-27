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
      <>
        {collection.length > 0 &&
          collection.map((article, index) => {
            const { author, created_at, story_title, story_url } = article;
            return (
              <ArticlePreview
                key={index}
                author={author}
                like={false}
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
