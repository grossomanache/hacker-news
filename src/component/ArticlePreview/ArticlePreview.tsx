import ArticlePreviewContainer from "./ArticlePreviewContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClockFour } from "@fortawesome/free-solid-svg-icons";

interface ArticleProps {
  time: string;
  author: string;
  title: string;
  like: boolean;
}

const ArticlePreview = ({
  time,
  author,
  title,
  like,
}: ArticleProps): JSX.Element => {
  return (
    <ArticlePreviewContainer>
      <div className="article--column">
        <p className="article--time">
          {" "}
          <FontAwesomeIcon icon={faClockFour} className="icon" /> {time} hours
          ago by {author}
        </p>
        <h4 className="article--title">{title}</h4>
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
