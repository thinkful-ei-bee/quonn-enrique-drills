import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";
import Accordian from "./Accordian-drills/Accordian";
import STORE from "./Accordian-drills/STORE";
import "./index.css";

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];

ReactDOM.render(
  <div>
    <HelloWorld /> <Bomb /> <RouletteGun bulletInChamber={8} />{" "}
    <Accordian sections={sections} />
  </div>,
  document.getElementById("root")
);
