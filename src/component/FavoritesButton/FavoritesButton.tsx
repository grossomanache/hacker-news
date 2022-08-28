import { MouseEvent } from "react";
import { UiState } from "../../interfaces/UiInterfaces";
import { toggleFavoritesActionCreator } from "../../redux/features/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import FavoritesButtonContainer from "./FavoritesButtonContainer";

const FavoritesButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { myFaves }: UiState = useAppSelector(({ ui }) => ui);
  const toggleOption = (event: any) => {
    const {
      target: { className },
    } = event;
    if (!className.includes("active")) {
      dispatch(toggleFavoritesActionCreator());
    }
  };
  return (
    <FavoritesButtonContainer>
      <p className={`all ${myFaves ? "" : "active"}`} onClick={toggleOption}>
        All
      </p>
      <p
        className={`myFaves ${myFaves ? "active" : ""}`}
        onClick={toggleOption}
      >
        My faves
      </p>
    </FavoritesButtonContainer>
  );
};

export default FavoritesButton;
