import React from "react";
import catImage from "C:\\Users\\Aizaw\\Documents\\Studies\\SEM VI\\Capstone\\prac31\\hello-world-react\\src\\cat.jpg";

function Cat() {
  return <img src={catImage} width="100" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Cat />
      <Cat />
      <Cat />
    </section>
  );
}
