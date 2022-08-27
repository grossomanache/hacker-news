import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  p {
    height: 32px;
    line-height: 32px;
    width: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    margin: 0 4px;
    text-align: center;
    &.active {
      color: #ffffff;
      background-color: #1890ff;
    }
  }
`;

export default PaginationContainer;
