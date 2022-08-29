import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { changePageActionCreator } from "../../redux/features/pageSlice";
import store from "../../redux/store/store";
import Pagination from "./Pagination";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given the Pagination Component, being on the 2nd page", () => {
  describe("When page 10 is clicked", () => {
    test("Then the changePageAction, with payload of 10, will be called", () => {
      const originalPageNumber = 2;
      const newPageNumber = 10;

      render(
        <Provider store={store}>
          <Pagination page={originalPageNumber} />
        </Provider>
      );

      const searchedItem = screen.getByText(newPageNumber);
      userEvent.click(searchedItem);

      expect(mockDispatch).toHaveBeenCalledWith(
        changePageActionCreator(newPageNumber)
      );
    });
  });
});
