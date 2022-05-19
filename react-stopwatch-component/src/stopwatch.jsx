import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      time: 0
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
  }

  turnOn() {
    this.setState({ isPlaying: true });
    this.intervalID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  turnOff() {
    this.setState({ isPlaying: false });
    clearInterval(this.intervalID);
  }

  handleToggle() {
    if (!this.state.isPlaying) {
      this.turnOn();
    } else {
      this.turnOff();
    }
  }

  handleFaceClick() {
    if (!this.state.isPlaying) {
      this.setState({ time: 0 });
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <button
          onClick={this.handleFaceClick}
          className={`count ${this.state.isPlaying ? 'on' : 'off'}`}>
          {this.state.time}
        </button>
        <button onClick={this.handleToggle} className="toggler">
          <i
            className={
              this.state.isPlaying ? 'fas fa-pause' : 'fas fa-play'
            }></i>
        </button>
      </div>
    );
  }
}
