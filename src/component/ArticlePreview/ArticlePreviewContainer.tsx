import styled from "styled-components";

const ArticlePreviewContainer = styled.div`
  border: 1px solid #979797;
  border-radius: 6px;
  height: 90px;
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 20px;

  a {
    cursor: pointer;
    text-decoration: none;
    height: inherit;
    width: inherit;
    display: flex;
  }

  &:hover {
    opacity: 0.6;
    filter: alpha(opacity=40);
  }

  .article {
    &--column {
      flex-direction: column;
      justify-content: center;
      align-self: center;
      &:nth-child(1) {
        p,
        h4 {
          margin-left: 26px;
        }
      }
      &:nth-child(2) {
        background-color: #f5f5f5;
        width: 68px;
        height: inherit;
        border-radius: 0px 6px 6px 0;
      }
    }
    &--time {
      font-size: 11px;
      color: #767676;
      margin: 0;
    }
    &--title {
      font-size: 14px;
      color: #6b6b6b;
      font-weight: 500;
      margin: 5px 0;
    }
    &--like {
      text-align: center;
      font-size: 26px;
      svg {
        cursor: pointer;
        &.liked {
          color: #dd0031;
        }
        &.not-liked {
          color: #656565;
        }
      }
    }
  }
`;

export default ArticlePreviewContainer;
