import React from 'react'
import styles from './Navbar.module.scss'

const NavbarModule = ({name, isActive, setPage}) => {
  return (
    <li className={ isActive && styles.active} onClick={setPage}>
      <div>{name}</div>
    </li>
  )
}

export default NavbarModule