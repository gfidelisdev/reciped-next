import React from 'react'
import styles from './card.module.css'
export default function Card(props) {
    let theme = props.theme||''
    console.log(styles)
  return (
    <div className={`flex flex-col m-3`}>
        <div className={styles["card-picture"]}></div>
        <div className={`card-header${theme}`}>
            <h2>Header</h2>
        </div>
        <div className={`card-body${theme}`}>
            Corpo
        </div>
        <div className={`card-footer${theme}`}>
            Pé
        </div>
    </div>
  )
}
