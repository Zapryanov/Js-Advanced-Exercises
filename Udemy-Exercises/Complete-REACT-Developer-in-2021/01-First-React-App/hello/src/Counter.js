import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: props.counter
        }
    }

    updateCounter = () => {
        this.setState({
          counter: this.state.counter + 1
        })
    }
    
    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.updateCounter}>Increase the number</button>
            </div>
        )
    }
}

export default Counter;
