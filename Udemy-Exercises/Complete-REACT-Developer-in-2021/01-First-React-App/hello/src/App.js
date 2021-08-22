import React, { Component } from 'react';
import './App.css';
import TestComponent from './TestComponent';
import Counter from './Counter';
import InputForTest from './InputForTest';
import getGithubData from './services';

const number = 1;

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
      counter: 0,
      hideCounters: false,
      monsters: [],
      books: [
        { title: "IT", id:"1", author: "Stephen King", price: 20},
        { title: "Games", id:"2", author: "John Rowland", price: 65},
        { title: "Fishes", id:"3", author: "Debora Alice", price: 17},
      ]
    }

    this.counters = [1, 2, 3]
  }

  getData = async () => {
    const dataFromGithub = await getGithubData();

    this.setState({
      data: dataFromGithub
    })
  }

  componentDidMount() {
    this.getData()

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users}))
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
        <Counter counter={c} key={k} test1={1}/>
      )
    })
  }

  render() {
    console.log(this.state.data)
    if (this.state.isLoading) {
      return <p>Is Loading.............!</p>
    }
    return (
      <div className="App">
        <InputForTest name={this.state.data.name}/>
        {/* {this.state.monsters.map(monster => <p key={monster.id}>{monster.name}</p>)} */}
        <h1>4 + 5 = {4 + 5}</h1>
        <h1><this.showDate/></h1>
        <TestComponent testValue={number} car={"Audi"} engine={"V6"} color={"sky-blue"}/>
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
