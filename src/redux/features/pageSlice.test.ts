import pageReducer, {
  changePageActionCreator,
  nextPageActionCreator,
  previousPageActionCreator,
} from "./pageSlice";

describe("Given the nextPageActionCreator", () => {
  describe("When invoked when the page number is 2", () => {
    test("Then the resulting page state will change to 3", () => {
      const initialState = { page: 2 };
      const expectedState = { page: 3 };

      const action = nextPageActionCreator();
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the previousPageActionCreator", () => {
  describe("When invoked when the page number is 2", () => {
    test("Then the resulting page state will change to 1", () => {
      const initialState = { page: 2 };
      const expectedState = { page: 1 };

      const action = previousPageActionCreator();
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the changePageActionCreator", () => {
  describe("When invoked with a payload of 6, when the page number is 2", () => {
    test("Then the resulting page state will change to 6", () => {
      const initialState = { page: 2 };
      const expectedState = { page: 6 };

      const inputtedPageNumber = 6;

      const action = changePageActionCreator(inputtedPageNumber);
      const loadedState = pageReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
