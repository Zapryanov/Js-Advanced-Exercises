import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      text: "Hi new Javascript student!"
    }
  }

  handleText = () => {
    this.setState({
      text: "Hi javascript master!!!"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
          </p>
          <p>{this.state.text}</p>
          <button onClick={this.handleText}>Change text</button>
        </header>
      </div>
    );
  } 
}

// function App() {
//   const [text, changeText] = useState("Hi new Javascript student!")

//   const handleText = () => {
//     changeText("Hi javascript master!!!")
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello
//         </p>
//         <p>{text}</p>
//         <button onClick={handleText}>Change text</button>
//       </header>
//     </div>
//   );
// }

export default App;
