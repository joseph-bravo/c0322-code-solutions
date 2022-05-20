import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0
    };
  }

  componentDidMount() {
    this.intervalID = setInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="carousel">
        <button>left</button>
        {this.props.imagesSrc.map((e, i) => {
          return (
            <CarouselImage
              src={e}
              key={i}
              isHidden={i !== this.state.activeImage}
            />
          );
        })}
        <button>right</button>
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
