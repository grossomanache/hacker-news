import ArticlePreviewContainer from "./ArticlePreviewContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { ArticleProps } from "./ArticlePreviewTypes";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import { useAppDispatch } from "../../redux/store/hooks";
import { addToFavoritesActionCreator } from "../../redux/features/articlesSlice";
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
            className={`icon ${like ? "" : "not-"}liked`}
            id={story_id.toString()}
            onClick={() => dispatch(addToFavoritesActionCreator(story_id))}
          />
        </p>
      </div>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;
