import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent';

const number = 1;

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Frankenstein", id:"1" },
        { name: "Drakula", id:"2" },
        { name: "Zombie", id:"3" }
      ],
      books: [
        { title: "IT", id:"1", author: "Stephen King", price: 20},
        { title: "Games", id:"2", author: "John Rowland", price: 65},
        { title: "Fishes", id:"3", author: "Debora Alice", price: 17},
      ]
    }
  }

  showDate() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
      <div>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>;
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
        <h1>4 + 5 = {4 + 5}</h1>
        <h1><this.showDate/></h1>
        <TestComponent testValue={number}/>
        {this.state.books.map((book, i) => <h2 key={book.id}>{i+1}. {book.author}: {book.title} - {book.price} $.</h2>)}
      </div>
    )
  }
}

export default App;
