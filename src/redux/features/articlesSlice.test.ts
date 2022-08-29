import articleReducer, {
  addToFavoritesActionCreator,
  deleteFromFavoritesActionCreator,
  filterActionCreator,
  loadCollectionActionCreator,
  loadFavoritesCollectionActionCreator,
  resetCollectionActionCreator,
} from "./articlesSlice";

describe("Given the filterActionCreator", () => {
  describe("When invoked with a payload of 'angular'", () => {
    test("Then the resulting state will contain 'angular'", () => {
      const initialState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };
      const expectedState = {
        filter: "angular",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };

      const inputtedFilter = "angular";

      const action = filterActionCreator(inputtedFilter);
      const loadedState = articleReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the addToFavoritesActionCreator", () => {
  describe("When it has a initial state of [1,2,3,4] and its invoked with a payload of 5", () => {
    test("Then the resulting state will contain [1,2,3,4,5] as favorites", () => {
      const initialState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };
      const expectedState = {
        filter: "react",
        favorites: [1, 2, 3, 4, 5],
        collection: [],
        favoriteCollection: [],
      };

      const inputtedFilter = 5;

      const action = addToFavoritesActionCreator(inputtedFilter);
      const loadedState = articleReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the deleteFromToFavoritesActionCreator", () => {
  describe("When it has a initial state of [1,2,3,4] and its invoked with a payload of 3", () => {
    test("Then the resulting state will contain [1,2,4] as favorites", () => {
      const initialState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };
      const expectedState = {
        filter: "react",
        favorites: [1, 2, 4],
        collection: [],
        favoriteCollection: [],
      };

      const inputtedFilter = 3;

      const action = deleteFromFavoritesActionCreator(inputtedFilter);
      const loadedState = articleReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

const testArticle = {
  story_title: "New frameworks are faster than React",
  story_url: "www.vue.org",
  author: "León",
  created_at: new Date(2021, 1, 1),
  story_id: 3031,
};

describe("Given the loadCollectioActionCreator", () => {
  describe("When it has a initial state of [] and its invoked with a payload of an article", () => {
    test("Then the resulting state will contain the article in its state", () => {
      const initialState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };
      const expectedState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [testArticle],
        favoriteCollection: [],
      };

      const action = loadCollectionActionCreator([testArticle]);
      const loadedState = articleReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the resetCollectioActionCreator", () => {
  describe("When it has a initial state of [] and its invoked with a payload of an article", () => {
    test("Then the resulting state will contain the article in its state", () => {
      const initialState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [testArticle],
        favoriteCollection: [],
      };
      const expectedState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };

      const action = resetCollectionActionCreator();
      const loadedState = articleReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

const testFavorite = {
  title: "New frameworks are faster than React",
  url: "www.vue.org",
  author: "León",
  created_at: new Date(2021, 1, 1),
  id: 3031,
};

describe("Given the loadFavoritesCollectioActionCreator", () => {
  describe("When it has a initial state of [] and its invoked with a payload of an article", () => {
    test("Then the resulting state will contain the article in its state", () => {
      const initialState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [],
      };
      const expectedState = {
        filter: "react",
        favorites: [1, 2, 3, 4],
        collection: [],
        favoriteCollection: [testFavorite],
      };

      const action = loadFavoritesCollectionActionCreator([testFavorite]);
      const loadedState = articleReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
