import { useAppDispatch } from "../../redux/store/hooks";
import { loadArticlesThunk } from "../../redux/thunks/articleThunks";
import FilterContainer from "./FilterContainer";

const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const modifyFavorite = (event: any) => {
    dispatch(loadArticlesThunk({ searchTerm: event.target.value }));
  };
  return (
    <FilterContainer>
      <select defaultValue="" onChange={modifyFavorite}>
        <option value="">Select your news</option>
        <option value="angular">Angular </option>
        <option value="react">React</option>
        <option value="vue">Vue </option>
      </select>
    </FilterContainer>
  );
};

export default Filter;
