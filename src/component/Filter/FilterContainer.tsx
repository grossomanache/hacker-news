import styled from "styled-components";

const viewport_width = window.innerWidth;
console.log(viewport_width);

const FilterContainer = styled.div`
  font-family: "Roboto", sans-serif;
  select {
    width: 240px;
    height: 32px;
    margin-left: 30px;
    size: 20;
  }
`;

export default FilterContainer;
