import { useState } from 'react'
import './App.css'
import DrinkList from './components/DrinkList'
import SearchBar from './components/SearchBar'
import DrinkTutorial from './components/DrinkTutorial'

function App() {
    const [query, setQuery] = useState<string>('')
    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
        <>
            <SearchBar onSearch={setQuery} />
            <DrinkList query={query} onSelect={setSelectedId} />
            {selectedId && <DrinkTutorial drinkId={selectedId} />}
        </>
    )
}

export default App