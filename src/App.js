import React from "react";
import HelloWorld from "./components/HelloWorld";
import GreetFunc from "./components/GreetFunc";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Gallery from "./components/Profile";
import catImage from "C:\\Users\\Aizaw\\Documents\\Studies\\SEM VI\\Capstone\\prac31\\hello-world-react\\src\\cat.jpg";

function MyOwn() {
  return <img src={catImage} alt="cat picture" />;
}

function App() {
  return (
    <div>
      <HelloWorld />
      <GreetFunc name="Kanishak" />
      <Welcome object="user" />
      <Profile />
      <Gallery />
      <MyOwn />
    </div>
  );
}

export default App;
