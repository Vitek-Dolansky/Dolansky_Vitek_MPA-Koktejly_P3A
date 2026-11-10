import { useState } from 'react'
import './App.css'
import DrinkList from './components/DrinkList'
import SearchBar from './components/SearchBar'

function App() {
  const [query, setQuery] = useState<string>('')

  return (
    <>
      <SearchBar onSearch={setQuery} />
      <DrinkList query={query} />
    </>
  )
}

export default App