import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openHeader: 0
    };
    this.setOpenBox = this.setOpenBox.bind(this);
  }

  setOpenBox(key) {
    this.setState({ openHeader: key });
  }

  render() {
    const content = this.props.content;

    return (
      <ul className="accordion">
        {content.map((e, i) => (
          <AccordionBox
            e={e}
            key={i}
            id={i + 1}
            isOpen={i + 1 === this.state.openHeader}
            setOpenBox={this.setOpenBox}
          />
        ))}
      </ul>
    );
  }
}

class AccordionBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  handleClick() {
    this.props.setOpenBox(this.props.id);
  }

  handleDoubleClick() {
    if (this.props.isOpen) {
      this.props.setOpenBox(0);
    }
  }

  render() {
    const e = this.props.e;
    return (
      <li className={`box  ${this.props.isOpen ? 'open' : 'closed'}`}>
        <div
          onClick={this.handleClick}
          onDoubleClick={this.handleDoubleClick}
          className="box-header">
          <h3>{e.header}</h3>
        </div>
        <div className="box-body">{e.body}</div>
      </li>
    );
  }
}
