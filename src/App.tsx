import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DrinkList from './components/DrinkList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      <SearchBar onSearch={(q) => console.log(q)} />
      <DrinkList />
    </>
  )
}

export default App