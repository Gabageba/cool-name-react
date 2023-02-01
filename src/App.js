import React from 'react'
import './index.scss'
import Header from './components/Header/Header'
import Jutsu from './pages/Jutsu/Jutsu'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div style={{backgroundColor: '#282828', width: '358px'}}>
      <div className={'popup'}>
        <Header/>
        <Navbar/>
        <Jutsu/>
      </div>
    </div>
  )
}

export default App