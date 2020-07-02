import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('effect...')
    axios
      .get(`https://www.breakingbadapi.com/api/characters`)
      .then(response => {
        console.log(response.data)
        setItems(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        console.log('Something broke down.')
      })

  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
