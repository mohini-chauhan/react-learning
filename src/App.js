import React, { useState } from 'react';
import './style.css';
import { Component } from 'react';
import Phonebook from './Phonebook.js';

//counter using functional component//
function Counter() {
  const [count, setcount] = useState(0);
  function increment() {
    setcount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setcount(count - 1);
    } else {
      console.log('invalid');
    }
  }
  return (
    <div className="main">
      <button onClick={decrement}>-</button>
      <p>Functional Counter value:{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

//counter using the class component//
class Counter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  //function binding using arrow function//
  decrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - this.props.text });
    } else {
      console.log('invalid');
    }
  };
  increment = () => {
    this.setState({ value: this.state.value + this.props.text });
  };
  render() {
    const Count = this.state.value;
    return (
      <div className="main2">
        <button onClick={this.decrement}>-</button>
        <p>
          Class Counter increment/decrement by {this.props.text} value:{Count}
        </p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Counter />
      <Counter1 text={1} />
      <Counter1 text={5} />
      <Phonebook />
    </div>
  );
}
