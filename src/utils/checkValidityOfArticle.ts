import { ArticleToBeChecked } from "../interfaces/ArticlesInterfaces";

export const checkValidityOfArticle = (article: ArticleToBeChecked) => {
  const { author, story_title, story_url, created_at } = article;

  if (!author || !story_title || !story_url || !created_at) {
    return false;
  }
  return true;
};
