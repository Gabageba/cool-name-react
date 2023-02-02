import React from 'react'
import styles from './Input.module.scss'
import {changeStorage} from '../../utils/storage'

const Input = ({id, name, setting, setSetting}) => {
  return (
    <div className={styles.customCheckbox}>
      <input type="checkbox" className={styles.input} id={id} name={id} checked={setting} onChange={(event) => {
        changeStorage(setSetting, id, event.target.checked)
      }} />
        <label htmlFor={id} className={styles.label}></label>
        <span className={styles.name}>{name}</span>
    </div>
  )
}

export default Input