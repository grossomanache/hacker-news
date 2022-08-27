import ArticlePreviewContainer from "./ArticlePreviewContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { ArticleProps } from "./ArticlePreviewTypes";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

/* <FontAwesomeIcon icon={faClockFour} className="icon" />  */

const ArticlePreview = ({
  created_at,
  author,
  story_title,
  story_url,
  like,
}: ArticleProps): JSX.Element => {
  return (
    <ArticlePreviewContainer>
      <div className="article--column">
        <p className="article--time">
          <FontAwesomeIcon icon={faClockFour} className="icon" />
          <span> </span> {timeAgo.format(new Date(created_at))} by {author}
        </p>
        <h4 className="article--title">
          <a href={story_url}>{story_title}</a>
        </h4>
      </div>
      <div className="article--column">
        <p className="article--like">
          {like && (
            <FontAwesomeIcon icon={faHeart} className="article--like icon" />
          )}
        </p>
      </div>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;
