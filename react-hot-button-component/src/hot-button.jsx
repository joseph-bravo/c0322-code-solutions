import React from 'react';

const colorThresholds = [3, 6, 9, 12, 15];

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let color = colorThresholds.findIndex(e => e >= this.state.count);
    if (color === -1) {
      color = colorThresholds.length;
    }

    return (
      <>
        <button className={'button-' + color} onClick={this.increment}>
          Hot Button
        </button>
        <p>counter for demo purposes: {this.state.count}</p>
      </>
    );
  }
}
