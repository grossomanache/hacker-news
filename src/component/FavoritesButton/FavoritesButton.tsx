import { UiState } from "../../interfaces/UiInterfaces";
import { useAppSelector } from "../../redux/store/hooks";
import FavoritesButtonContainer from "./FavoritesButtonContainer";

const FavoritesButton = (): JSX.Element => {
  const { myFaves }: UiState = useAppSelector(({ ui }) => ui);
  return (
    <FavoritesButtonContainer>
      <p className={`all ${myFaves ? "" : "active"}`}>All</p>
      <p className={`myFaves ${myFaves ? "active" : ""}`}>My faves</p>
    </FavoritesButtonContainer>
  );
};

export default FavoritesButton;

// className={`icon ${
//   favorites.includes(story_id) ? "" : "not-"
// }liked`}
