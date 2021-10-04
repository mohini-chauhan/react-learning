import React, { Component } from 'react';
export default class PhoneBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      contact: null,
      phoneBook: [],
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!(this.state.name && this.state.contact)) return;
    const data = {
      name: this.state.name,
      contact: this.state.contact,
    };
    this.setState((prevState) => {
      return { phoneBook: prevState.phoneBook.concat(data) };
    });
    console.log(this.state.phoneBook);
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
        <table>
          <tr>
            <th>Name</th>
            <th>Contact No.</th>
          </tr>
          {this.state.phoneBook.length > 0 ? (
            this.state.phoneBook.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.contact}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>&nbsp;</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}
