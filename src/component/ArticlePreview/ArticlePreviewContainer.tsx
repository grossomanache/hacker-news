import styled from "styled-components";

const ArticlePreviewContainer = styled.div`
  border: 1px solid #979797;
  border-radius: 6px;
  height: 90px;
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;

  .article {
    &--column {
      flex-direction: column;
      justify-content: center;
      align-self: center;
      &:nth-child(1) {
        margin-left: 26px;
      }
      &:nth-child(2) {
        background-color: #f5f5f5;
        width: 68px;
      }
    }
    &--time {
      font-size: 11px;
    }
    &--title {
      font-size: 14px;
      font-weight: 500;
      margin: 0;
    }
    &--like {
      text-align: center;
      font-size: 26px;
      svg {
        color: #dd0031;
        border: #dd0031;
      }
    }
  }
`;

export default ArticlePreviewContainer;
