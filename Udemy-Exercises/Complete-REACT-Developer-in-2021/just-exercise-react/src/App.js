import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({monsters: data}))
  }

  render() {
    const {monsters} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <CardList monsters={monsters}/>
        </header>

      </div>
    )
  }
}

export default App;