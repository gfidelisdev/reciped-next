import React from "react";
import Card from "./Card";

export default function CardArea(props) {
  return (
    <div className="my-4">
      <div className="flex flex-wrap justify-center">
        <h1>{props.title}</h1>
      </div>
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
