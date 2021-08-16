import React, { Component } from 'react';

class InputForTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    showInputValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input onChange={this.showInputValue}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default InputForTest;