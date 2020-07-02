import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    console.log('effect...')
    axios
      .get(`https://www.breakingbadapi.com/api/characters/${searchText}`)
      .then(response => {
        console.log(response.data)
        setItems(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('Something broke down.')
      })

  }, [searchText])

  const handleSearch = (event) => {
    console.log(`handleSearch reporting = ${event.target.value}`)
    setSearchText(event.target.value)

  }

  return (
    <div className="container">
      <Header />
      <Search handleSearch={handleSearch} searchText={searchText} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
