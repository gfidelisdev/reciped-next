import React from "react";
import Card from "./Card";
let recipe = {
  id: 1,
  title: 'Bolinho',
  category: 'Bolos',
  prepTime: '1h45min',
  author: 'Guilherme',
  rating:'4'
}
export default function CardArea(props) {
  return (
    <div className="my-4">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-4xl">{props.title}</h1>
      </div>
      <div className="flex flex-wrap">
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
        <Card recipe={recipe}/>
      </div>
    </div>
  );
}
