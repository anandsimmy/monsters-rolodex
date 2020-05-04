import React from 'react';
import axios from 'axios'
import { CardList } from './components/card-list-component/card-list-component'
import { SearchBoxComponent } from './components/search-box-component/search-box-component'
import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state={
      monsters:[],
      searchFieldValue: ''
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(users => this.setState({ monsters: users.data }))
  }

  searchField=(e) => {
    this.setState({
      searchFieldValue: e.target.value
    })
  }

  render(){
    const { monsters, searchFieldValue }=this.state
    //filtering out monster names that includes search field value
    const filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchFieldValue.toLowerCase()))
  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBoxComponent placeholder='Search for Monsters' handleChangeFunction={this.searchField}/>
      <CardList monsters={filteredMonsters} />
    </div>
  )
  }
}

export default App;
