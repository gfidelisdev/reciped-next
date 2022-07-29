import React from 'react'
import styles from './card.module.css'

const nopic = require('../../../defaults/pictures')

export default function Card(props) {
    let theme = props.theme||''
    console.log(styles)
    let picture = props.recipe?.picture || nopic.picture
  return (
    <div className={`flex flex-col m-3 rounded-lg shadow-2xl drop-shadow-2xl hover:scale-110 bg-slate-600 ${styles["card-main"]}`}>
        <div className={`${styles["card-picture"]}`}>
            <img src={picture} alt="" srcset="" />
        </div>
        <div className={`${styles["card-header"]}`}>
            <h2>Header</h2>
        </div>
        <hr></hr>
        <div className={`${styles["card-body"]}`}>
            Corpo
        </div>
        <hr></hr>
        <div className={`${styles["card-footer"]}`}>
            Pé
        </div>
    </div>
  )
}
