import ArticlePreviewContainer from "./ArticlePreviewContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { ArticleProps } from "./ArticlePreviewTypes";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import {
  addToFavoritesActionCreator,
  deleteFromFavoritesActionCreator,
} from "../../redux/features/articlesSlice";
import { ArticleState } from "../../interfaces/ArticlesInterfaces";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const ArticlePreview = ({
  created_at,
  author,
  story_title,
  story_url,
  story_id,
  like,
}: ArticleProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { favorites }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );

  if (!localStorage.getItem("favorites")) {
    localStorage.setItem("favorites", "[]");
  }

  const toggleFavorite = () => {
    let newFavorites = favorites;
    if (favorites.includes(story_id)) {
      dispatch(deleteFromFavoritesActionCreator(story_id));
      newFavorites.splice(newFavorites.indexOf(story_id), 1);
    } else {
      dispatch(addToFavoritesActionCreator(story_id));
      newFavorites.push(story_id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <ArticlePreviewContainer>
      <div className="article--column">
        <p className="article--time">
          <FontAwesomeIcon icon={faClockFour} className="icon" />
          <span> </span> {timeAgo.format(new Date(created_at))} by {author}
        </p>
        <h4 className="article--title">
          <a href={story_url} target="_blank" rel="noreferrer">
            {story_title}
          </a>
        </h4>
      </div>
      <div className="article--column">
        <p className="article--like">
          <FontAwesomeIcon
            icon={faHeart}
            className={`icon ${
              favorites.includes(story_id) ? "" : "not-"
            }liked`}
            id={story_id.toString()}
            onClick={toggleFavorite}
          />
        </p>
      </div>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;
