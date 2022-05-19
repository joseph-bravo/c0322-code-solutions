import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e) {
    if (e.target.matches('.app-drawer-container')) {
      this.props.closeModal();
    }
  }

  render() {
    const isModalOpen = this.props.isModalOpen;
    const drawerLinks = this.props.drawerLinks;

    return (
      <div
        onClick={this.handleClickOutside}
        className={`app-drawer-container ${isModalOpen ? 'open' : 'closed'}`}>
        <div className="app-drawer-content">
          <h1>Menu</h1>
          <nav>
            <ul>
              {drawerLinks.map((e, i) => (
                <DrawerLink
                  label={e.label}
                  key={i}
                  closeModal={this.props.closeModal}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

class DrawerLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.closeModal();
  }

  render() {
    const label = this.props.label;
    return (
      <li>
        <button onClick={this.handleClick}>{label}</button>
      </li>
    );
  }
}

DrawerLink.defaultProps = {
  href: './',
  label: 'Link'
};
