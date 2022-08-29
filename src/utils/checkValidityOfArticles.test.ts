import { checkValidityOfArticle } from "./checkValidityOfArticle";

describe("Given the checkValidityOfArticles function", () => {
  describe("When an article which doesn't contain an author", () => {
    test("Then it should return false", () => {
      const invalidArticle = {
        story_title: "New frameworks are slower than React",
        story_url: "www.react.org",
        author: null,
        created_at: new Date(2020, 1, 1),
        story_id: 3030,
      };

      const expectedReturnedValue = false;
      const returnedValue = checkValidityOfArticle(invalidArticle);

      expect(returnedValue).toBe(expectedReturnedValue);
    });
  });
  describe("When an article contains valid values", () => {
    test("Then it should return false", () => {
      const validArticle = {
        story_title: "New frameworks are faster than React",
        story_url: "www.vue.org",
        author: "León",
        created_at: new Date(2021, 1, 1),
        story_id: 3031,
      };

      const expectedReturnedValue = true;
      const returnedValue = checkValidityOfArticle(validArticle);

      expect(returnedValue).toBe(expectedReturnedValue);
    });
  });
});
