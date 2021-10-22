import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      serachField: ''
    }
  }

  handleSearchField = (e) => {
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
    console.log(filteredMonsters)
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" onChange={(e) => this.handleSearchField(e)} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  } 
}

export default App;
