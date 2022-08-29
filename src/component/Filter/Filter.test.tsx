import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Filter from "./Filter";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ filter: "react" }),
  useDispatch: () => mockDispatch,
}));

describe("Given the Filter Component", () => {
  describe("When invoked", () => {
    test("Then 4 options will be renderized", () => {
      render(
        <Provider store={store}>
          <Filter />
        </Provider>
      );

      const searchedOptions = screen.getAllByRole("option");

      const expectedNumberOfItems = 4;

      expect(searchedOptions).toHaveLength(expectedNumberOfItems);
    });
  });
  describe("When an option is clicked", () => {
    test("Then actions will be dispatched twice", () => {
      render(
        <Provider store={store}>
          <Filter />
        </Provider>
      );

      const searchedDropdown = screen.getByRole("combobox");

      fireEvent.change(searchedDropdown, { target: { value: "React" } });

      const expectedNumberOfCalls = 2;

      expect(mockDispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });
});
