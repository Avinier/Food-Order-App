import React from "react";
import MenuItems from "./MenuItems";
import Card from "../UI/Card";

export default function MainMenu(props) {
  return (
    <Card>
      <MenuItems data={props.data} />
    </Card>
  );
}
