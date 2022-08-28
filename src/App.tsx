import React from "react";
import NavBar from "./component/NavBar/NavBar";
import { UiState } from "./interfaces/UiInterfaces";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { useAppSelector } from "./redux/store/hooks";

function App(): JSX.Element {
  const { myFaves }: UiState = useAppSelector(({ ui }) => ui);
  return (
    <div className="App">
      <NavBar />
      {myFaves ? <Favorites /> : <Home />}
    </div>
  );
}

export default App;
