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
        const { authenticate } = this.props
        return (
            <div>
                <p>Counter: { authenticate ? 'Auth' : "No Auth"} {this.state.counter}</p>
                <button onClick={this.updateCounter}>Increase the number</button>
            </div>
        )
    }
}

export default Counter;
