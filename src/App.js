import React, {useState} from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Jutsu from './pages/Jutsu/Jutsu'
import Navbar from './components/Navbar/Navbar'
import AnimeGo from './pages/AnimeGo/AnimeGo'
import {animego, jutsu} from './utils/const'

const App = () => {
  const [page, setPage] = useState(jutsu)

  return (
    <div style={{backgroundColor: '#282828', width: '358px'}}>
      <div className={'popup'}>
        <Header/>
        <Navbar page={page} setPage={setPage}/>
        {
          page === jutsu && <Jutsu/>
        }
        {
          page === animego &&  <AnimeGo/>
        }
      </div>
    </div>
  )
}

export default App