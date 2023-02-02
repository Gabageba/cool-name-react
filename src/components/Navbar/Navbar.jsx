import React from 'react'
import styles from './Navbar.module.scss'
import NavbarModule from './NavbarModule'
import {ANIME_GO, JUT_SU} from '../../utils/const'

const Navbar = ({page, setPage}) => {
  return (
    <div style={{alignItems: 'center'}}>
      <ul className={styles.navbar}>
        <NavbarModule name={'Jut.su'} isActive={page === JUT_SU} setPage={() => setPage(JUT_SU)}/>
        <NavbarModule name={'AnimeGo'} isActive={page === ANIME_GO} setPage={() => setPage(ANIME_GO)}/>
      </ul>
    </div>

  )
}

export default Navbar