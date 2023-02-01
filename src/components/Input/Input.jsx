import React from 'react'
import styles from './Input.module.scss'

const Input = ({id, name}) => {
  return (
    <div className={styles.customCheckbox}>
      <input type="checkbox" className={styles.input} id={id} name={id} />
        <label htmlFor={id} className={styles.label}></label>
        <span className={styles.name}>{name}</span>
    </div>
  )
}

export default Input