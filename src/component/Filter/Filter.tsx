import FilterContainer from "./FilterContainer";

const Filter = (): JSX.Element => {
  return (
    <FilterContainer>
      <select>
        <option value="angular">Angular </option>
        <option value="react">React</option>
        <option value="vue">Vue </option>
      </select>
    </FilterContainer>
  );
};

export default Filter;
