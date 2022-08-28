import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import {
  addToFavoritesActionCreator,
  deleteFromFavoritesActionCreator,
} from "../../redux/features/articlesSlice";
import { ArticleState, Favorite } from "../../interfaces/ArticlesInterfaces";
import ArticlePreviewContainer from "../ArticlePreview/ArticlePreviewContainer";
import { timeAgo } from "../ArticlePreview/ArticlePreview";

const FavoritePreview = ({ article }: { article: Favorite }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { favorites }: ArticleState = useAppSelector(
    ({ articles }) => articles
  );

  const { created_at, author, title, url, id } = article;

  const toggleFavorite = () => {
    if (favorites.includes(id)) {
      dispatch(deleteFromFavoritesActionCreator(id));
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((favorite) => favorite !== id))
      );
    } else {
      dispatch(addToFavoritesActionCreator(id));
      localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    }
  };

  return (
    <ArticlePreviewContainer>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="article--column"
      >
        <p className="article--time">
          <FontAwesomeIcon icon={faClockFour} className="icon" />
          <span> </span> {timeAgo.format(new Date(created_at))} by {author}
        </p>
        <h4 className="article--title">{title}</h4>
      </a>
      <div className="article--column">
        <p className="article--like">
          <FontAwesomeIcon
            icon={faHeart}
            className={`icon ${favorites.includes(id) ? "" : "not-"}liked`}
            id={id.toString()}
            onClick={toggleFavorite}
          />
        </p>
      </div>
    </ArticlePreviewContainer>
  );
};

export default FavoritePreview;
