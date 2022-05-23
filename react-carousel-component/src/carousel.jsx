import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0
    };

    this.activeCycleNext = this.activeCycleNext.bind(this);
    this.activeCyclePrev = this.activeCyclePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.activeSet = this.activeSet.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.activeCycleNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  activeCycleNext() {
    let newActiveImage = this.state.activeImage + 1;
    if (newActiveImage === this.props.imagesSrc.length) {
      newActiveImage = 0;
    }
    if (newActiveImage === -1) {
      newActiveImage = this.props.imagesSrc.length - 1;
    }
    this.setState({ activeImage: newActiveImage });
  }

  activeCyclePrev() {
    let newActiveImage = this.state.activeImage - 1;
    if (newActiveImage === this.props.imagesSrc.length) {
      newActiveImage = 0;
    }
    if (newActiveImage === -1) {
      newActiveImage = this.props.imagesSrc.length - 1;
    }
    this.setState({ activeImage: newActiveImage });
  }

  resetTimer() {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.activeCycleNext, 3000);
  }

  activeSet(activeImage) {
    this.setState({ activeImage });
    this.resetTimer();
  }

  handleNext() {
    this.activeCycleNext();
    this.resetTimer();
  }

  handlePrev() {
    this.activeCyclePrev();
    this.resetTimer();
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-body">
          <button className="carousel-nav" onClick={this.handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {this.props.imagesSrc.map((e, i) => {
            return (
              <CarouselImage
                src={e}
                key={i}
                isHidden={i !== this.state.activeImage}
              />
            );
          })}
          <button className="carousel-nav" onClick={this.handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="carousel-footer">
          {this.props.imagesSrc.map((e, i) => {
            return (
              <ProgressDot
                key={i}
                id={i}
                activeSet={this.activeSet}
                active={i !== this.state.activeImage}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class CarouselImage extends React.Component {
  render() {
    return (
      <div className={`image-wrapper ${this.props.isHidden ? 'hidden' : ''}`}>
        <img src={this.props.src}></img>
      </div>
    );
  }
}

class ProgressDot extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.activeSet(this.props.id);
  }

  render() {
    return (
      <button className="progress-dot" onClick={this.handleClick}>
        {
          // prettier-ignore
          this.props.active
            ? <i className="fa-solid fa-circle"></i>
            : <i className="fa-regular fa-circle"></i>
        }
      </button>
    );
  }
}
