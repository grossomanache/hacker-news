import styled from "styled-components";

const FavoritesButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #606060;
  cursor: pointer;
  p {
    border: solid 1px #d6d6d6;
    border-radius: 2px;
    height: 31px;
    width: 98px;
    line-height: 28px;
    text-align: center;
    &.active {
      border-color: #1797ff;
      color: #1797ff;
    }
  }
`;

export default FavoritesButtonContainer;
