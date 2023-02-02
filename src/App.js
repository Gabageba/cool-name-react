import React, {useState} from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AnimeGo from './pages/AnimeGo/AnimeGo'
import {ANIME_GO, JUT_SU} from './utils/const'
import Jutsu from './pages/Jutsu/Jutsu'

const App = () => {
  const [page, setPage] = useState(JUT_SU)
  return (
    <div style={{backgroundColor: '#282828', width: '358px'}}>
      <div className={'popup'}>
        <Header/>
        <Navbar page={page} setPage={setPage}/>
        {
          page === JUT_SU && <Jutsu/>
        }
        {
          page === ANIME_GO &&  <AnimeGo/>
        }
      </div>
    </div>
  )
}

export default App