import React from 'react'
import styles from './Navbar.module.scss'

const NavbarModule = ({name, isActive}) => {
  return (
    <li className={ isActive && styles.active}>
      <div>{name}</div>
    </li>
  )
}

export default NavbarModule