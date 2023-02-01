import React from 'react'
import styles from './Navbar.module.scss'
import NavbarModule from './NavbarModule'
import {animego, jutsu} from '../../utils/const'

const Navbar = ({page, setPage}) => {
  return (
    <div style={{alignItems: 'center'}}>
      <ul className={styles.navbar}>
        <NavbarModule name={'Jut.su'} isActive={page === jutsu} setPage={() => setPage(jutsu)}/>
        <NavbarModule name={'AnimeGo'}  isActive={page === animego} setPage={() => setPage(animego)}/>
      </ul>
    </div>

  )
}

export default Navbar