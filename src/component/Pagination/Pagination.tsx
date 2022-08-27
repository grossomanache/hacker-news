import {
  PaginationState,
  PaginatorProps,
} from "../../interfaces/PagesInterfaces";
import { changePageActionCreator } from "../../redux/features/pageSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import PaginationContainer from "./PaginationContainer";

const Pagination = (): JSX.Element => {
  const dispatch = useAppDispatch();

  let items = [];
  for (let item = 1; item <= 10; item++) {
    items.push(
      <p key={item} onClick={() => dispatch(changePageActionCreator(item))}>
        {item}
      </p>
    );
  }

  return <PaginationContainer>{items}</PaginationContainer>;
};

export default Pagination;
