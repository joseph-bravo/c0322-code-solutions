import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      warningId: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value, warningId: this.passwordErrorCheck(value) });
  }

  passwordErrorCheck(pw) {
    if (pw.length === 0) {
      return 1;
    }
    if (pw.length < 8) {
      return 2;
    }
    return 0;
  }

  render() {
    let errorMessage;
    let icon;
    switch (this.state.warningId) {
      case 0:
        errorMessage = <p className="error-message"> </p>;
        icon = <i className="fa-solid fa-check"></i>;
        break;
      case 1:
        errorMessage = (
          <p className="error-message error">A password is required.</p>
        );
        icon = <i className="fa-solid fa-xmark"></i>;
        break;
      case 2:
        errorMessage = (
          <p className="error-message error">Your password is too short.</p>
        );
        icon = <i className="fa-solid fa-xmark"></i>;
    }

    return (
      <form className="password-form">
        <label>
          <h4>Password</h4>
          <div>
            <input
              className="password-form-input"
              onChange={this.handleChange}
              type="password"
              name="password"
            />
            {icon}
          </div>
          {errorMessage}
        </label>
      </form>
    );
  }
}
