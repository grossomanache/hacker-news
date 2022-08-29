import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ArticlePreviewList from "./ArticlePreviewList";
import store from "../../redux/store/store";

let mockArticleCollection = [
  {
    story_title: "New frameworks are faster than React",
    story_url: "www.vue.org",
    author: "León",
    created_at: new Date(2021, 1, 1),
    story_id: 3031,
  },
  {
    story_title: "Old frameworks are slower than React",
    story_url: "www.react.org",
    author: "Cox",
    created_at: new Date(2023, 1, 1),
    story_id: 3033,
  },
];

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ collection: mockArticleCollection, favorites: [] }),
}));

describe("Given the ArticlePreviewListComponent", () => {
  describe("When invoked with a collection which contains 2 articles", () => {
    test("Then two anchors and two headers will be renderized", () => {
      render(
        <Provider store={store}>
          <ArticlePreviewList />
        </Provider>
      );

      const searchedAnchors = screen.getAllByRole("link");
      const searchedHeaders = screen.getAllByRole("heading");

      const expectedNumberOfItems = 2;

      expect(searchedAnchors).toHaveLength(expectedNumberOfItems);
      expect(searchedHeaders).toHaveLength(expectedNumberOfItems);
    });
  });
});
