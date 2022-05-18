import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ enabled: !this.state.enabled });
  }

  render() {
    return (
      <button
        onClick={this.toggle}
        className={`toggle ${this.state.enabled ? 'toggle-on' : 'toggle-off'}`}>
        <div></div>
      </button>
    );
  }
}
