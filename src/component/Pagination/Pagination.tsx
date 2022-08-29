import {
  changePageActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
} from "../../redux/features/pageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../redux/store/hooks";
import PaginationContainer from "./PaginationContainer";

const Pagination = ({ page }: { page: number }): JSX.Element => {
  const dispatch = useAppDispatch();

  let paginationButtons = [];
  paginationButtons.push(
    <p key={0} onClick={() => dispatch(previousPageActionCreator())}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </p>
  );
  for (let item = 1; item <= 10; item++) {
    paginationButtons.push(
      <p
        className={`${item === page ? "active" : ""}`}
        key={item}
        onClick={() => dispatch(changePageActionCreator(item))}
      >
        {item}
      </p>
    );
  }
  paginationButtons.push(
    <p key={11} onClick={() => dispatch(nextPageActionCreator())}>
      <FontAwesomeIcon icon={faArrowRight} />
    </p>
  );

  return <PaginationContainer>{paginationButtons}</PaginationContainer>;
};

export default Pagination;
