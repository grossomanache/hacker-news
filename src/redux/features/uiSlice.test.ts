import uiReducer, {
  loadingActionCreator,
  finishedLoadingActionCreator,
  toggleFavoritesActionCreator,
} from "./uiSlice";

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState = {
        loading: false,
        myFaves: false,
      };
      const expectedState = {
        loading: true,
        myFaves: false,
      };

      const action = loadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the finiushedLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const initialState = {
        loading: true,
        myFaves: false,
      };
      const expectedState = {
        loading: false,
        myFaves: false,
      };

      const action = finishedLoadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the toggleFavoritesActionCreator", () => {
  describe("When invoked and myFaves state is false", () => {
    test("Then the myFaves ui state should change to true", () => {
      const initialState = {
        loading: false,
        myFaves: false,
      };
      const expectedState = {
        loading: false,
        myFaves: true,
      };

      const action = toggleFavoritesActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
  describe("When invoked and myFaves state is true", () => {
    test("Then the myFaves ui state should change to false", () => {
      const initialState = {
        loading: false,
        myFaves: true,
      };
      const expectedState = {
        loading: false,
        myFaves: false,
      };

      const action = toggleFavoritesActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
