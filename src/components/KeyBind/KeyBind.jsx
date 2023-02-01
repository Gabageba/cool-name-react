import React from 'react'
import styles from './KeyBind.module.scss'

const KeyBind = ({name, button}) => {
  return (
    <div className={styles.keyBind}>
      <div className={styles.currentKey}>
        <div >{button}</div>
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default KeyBind