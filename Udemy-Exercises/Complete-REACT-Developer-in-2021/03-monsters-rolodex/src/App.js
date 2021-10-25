import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      serachField: ''
    }
  }

  onSearchChange = (e) => {
    this.setState({
      serachField: e.target.value
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({monsters: users}) )
  }

  render() {
    const { monsters, serachField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(serachField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.onSearchChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  } 
}

export default App;
