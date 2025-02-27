import React from "react";
import HelloWorld from "./components/HelloWorld";
import GreetFunc from "./components/GreetFunc";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <HelloWorld />
      <GreetFunc name="Kanishak" />
      <Welcome object="user" />
    </div>
  );
}

export default App;
