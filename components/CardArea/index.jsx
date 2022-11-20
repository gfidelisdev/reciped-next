import React, { useEffect, useState } from "react";
import Card from "./Card";
let recipe = {
  id: 1,
  title: 'Bolinho',
  category: 'Bolos',
  prepTime: '1h45min',
  author: 'Guilherme',
  rating:'4.7'
}
export default function CardArea({title, items}) {
  const [itemsComp, setItemsComp]=useState([])
  useEffect(() => {
    setItemsComp(items)
  }, [])
  
  
  return (
    <div className="my-4">
      <div className="flex flex-wrap justify-center">
        <h1 className="text-4xl">{title}</h1>
      </div>
      <div className="flex flex-wrap justify-around">
        {items.map(item=>{
          return <Card key={item.id} recipe={item}/>
        })}
      </div>
    </div>
  );
}
