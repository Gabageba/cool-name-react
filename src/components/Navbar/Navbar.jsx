import React from 'react'
import styles from './Navbar.module.scss'
import NavbarModule from './NavbarModule'

const Navbar = () => {
  return (
    <div style={{alignItems: 'center'}}>
      <ul className={styles.navbar}>
        <NavbarModule name={'Jut.su'} isActive={true}/>
        <NavbarModule name={'AnimeGo'}  isActive={false}/>
      </ul>
    </div>

  )
}

export default Navbar