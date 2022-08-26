import ArticlePreviewContainer from "./ArticlePreviewContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClockFour } from "@fortawesome/free-solid-svg-icons";

const ArticlePreview = (): JSX.Element => {
  return (
    <ArticlePreviewContainer>
      <div className="article--column">
        <p className="article--time">
          {" "}
          <FontAwesomeIcon icon={faClockFour} className="icon" /> 3 hours ago
        </p>
        <h4 className="article--title">Event-driven state management</h4>
      </div>
      <div className="article--column">
        <p className="article--like">
          <FontAwesomeIcon icon={faHeart} className="article--like icon" />
        </p>
      </div>
    </ArticlePreviewContainer>
  );
};

export default ArticlePreview;
