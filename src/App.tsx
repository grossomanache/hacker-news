import React from "react";
import NavBar from "./component/NavBar/NavBar";
import Home from "./pages/Home";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
