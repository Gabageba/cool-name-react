import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.extensionName}>Крутое название</h1>
      <h4 className={styles.author}>by Gabageba</h4>
    </div>
  )
}

export default Header