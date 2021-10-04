import React, { Component } from 'react';
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      contact: null,
      phoneBook: [],
    };
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="listContainer">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
