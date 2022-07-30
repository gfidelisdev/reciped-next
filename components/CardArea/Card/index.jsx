import React from 'react'
import styles from './card.module.css'

const nopic = require('../../../defaults/pictures')

export default function Card({theme, recipe}) {
    
    let picture = recipe?.picture || nopic.picture
  return (
    <div className={`flex flex-col m-3 rounded-lg shadow-2xl drop-shadow-2xl hover:scale-110 bg-slate-600 ${styles["card-main"]}`}>
        <div className={`${styles["card-picture"]}`}>
            <img src={picture} alt=""  />
        </div>
        <div className={`${styles["card-header"]} flex-col items-center`}>
            <div>
                <h2>{recipe.title}</h2>
            </div>
            <div>
                <h4>{recipe.category}</h4>
            </div>
        </div>
        <hr></hr>
        <div className={`${styles["card-body"]}`}>
            {recipe.rating}
        </div>
        <hr></hr>
        <div className={`${styles["card-footer"]} flex flex-row flex-wrap justify-between`}>
            <div className={`flex`}>{recipe.prepTime}</div>
            <div className={`flex font-semibold`}>{recipe.author}</div>
        </div>
    </div>
  )
}
