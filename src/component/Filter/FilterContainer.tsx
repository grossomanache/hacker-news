import styled from "styled-components";

const FilterContainer = styled.div`
  @media (max-width: 1183px) {
    margin-left: -315px;
  }
  @media (min-width: 1184px) {
    margin-left: -905px;
  }

  select {
    border-radius: 6px;
    cursor: pointer;
    width: 240px;
    height: 32px;
    margin: 23px 0;
    size: 20;
  }
`;

export default FilterContainer;
