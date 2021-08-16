import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent';
import Counter from './Counter';
import InputForTest from './InputForTest';

const number = 1;

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      hideCounters: false,
      isLoading: true,
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

    this.counters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  toggleCounters = () => {
    this.setState({
      hideCounters: !this.state.hideCounters
    })
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

  renderCounters() {
    return this.counters.map((c,k) => {
      return (
        <Counter counter={c} key={k}/>
      )
    })
  }

  render() {
    if (this.state.isLoading) {
      return <p>Is Loading.............!</p>
    }
    return (
      <div className="App">
        <InputForTest/>
        {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
        <h1>4 + 5 = {4 + 5}</h1>
        <h1><this.showDate/></h1>
        <TestComponent testValue={number}/>
        {this.state.books.map((book, i) => <h2 key={book.id}>{i+1}. {book.author}: {book.title} - {book.price} $.</h2>)}
        {this.state.hideCounters ? null : (
          <div>
            {this.renderCounters()}
          </div>
        )}
        <button onClick={this.toggleCounters}>Toggle Counters</button>
      </div>
    )
  }
}

export default App;
