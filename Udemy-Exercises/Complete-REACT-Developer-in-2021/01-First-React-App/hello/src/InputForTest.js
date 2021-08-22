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
        const { name } = this.props;

        if (!name) {
            return (
                <h1>Loading Spinner...!!!</h1>
            )
        }
        return(
            <div>
                <input onChange={this.showInputValue} value={name}/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default InputForTest;