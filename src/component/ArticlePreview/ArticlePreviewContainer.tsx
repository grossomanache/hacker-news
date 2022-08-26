import styled from "styled-components";

const ArticlePreviewContainer = styled.div`
  border: 1px solid #979797;
  border-radius: 6px;
  height: 90px;
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .article {
    &--column {
      flex-direction: column;
      &:nth-child(2) {
        background-color: #f5f5f5;
        width: 68px;
      }
    }
  }
`;

export default ArticlePreviewContainer;
