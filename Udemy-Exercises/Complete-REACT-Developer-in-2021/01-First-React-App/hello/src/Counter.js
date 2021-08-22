import React, { Component } from 'react';
import AuthContext from './context';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter
        }
    }

    static contextType = AuthContext;

    updateCounter = () => {
        this.setState({
          counter: this.state.counter + 1
        })
    }
    
    render() {
        return (
            <div>
                <p>Counter: { this.context.loggedIn ? 'Auth' : "No Auth"} {this.state.counter}</p>
                <button onClick={this.updateCounter}>Increase the number {this.context.loggedIn ? "Pesho" : ""}</button>
            </div>
        )
    }
}

export default Counter;
