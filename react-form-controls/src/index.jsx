import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange({ target }) {
    this.setState({ name: target.value });
  }

  handlePasswordChange({ target }) {
    this.setState({ password: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input
            onChange={this.handleUsernameChange}
            value={this.state.username}
            type="text"
            name="username"></input>
        </label>
        <label>
          Password
          <input
            onChange={this.handlePasswordChange}
            value={this.state.password}
            type="password"
            name="password"></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <RegistrationForm />
);
