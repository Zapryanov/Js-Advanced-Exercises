import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false,
            user: null
        }
    }

    logIn = (user) => {
        this.setState({
            loggedIn: true,
            user: user
        })
    }

    logOut = () => {
        this.setState({
            loggedIn: false,
            user: null
        })
    }

    render() {
        return this.props.children;
    }
}

export default App;