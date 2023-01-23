import {useEffect, useState} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchField from "./components/search-field/search-field.conponent";

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((monsters) => setMonsters(monsters))
  }, [])

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchValue])

  const getSearchValue = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchValue(inputValue)
  }

  return(
      <div className="App">
        <header className="App-header">
          <SearchField className='search-box-monsters' placeholder='Search' onChangeHandler={getSearchValue}/>
          <CardList monsters={filteredMonsters} />
        </header>
      </div>
  )
}
export default App;
