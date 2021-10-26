import React, {Component} from 'react';
import './App.css';

class Lifecycles extends Component {
  constructor(props) {
    super(props)

    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps);
    return nextProps.text !== this.props.text
    // return false;
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
