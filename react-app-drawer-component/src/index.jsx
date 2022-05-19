import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

const labelsAndLinks = [
  {
    label: 'this is a button'
  },
  {
    label: 'this is another button'
  },
  {
    label: 'yet another button'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <>
        <AppDrawer
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          drawerLinks={labelsAndLinks}
        />
        <div className="app">
          <header>
            <button onClick={this.openModal}>Toggle Drawer</button>
            <h1>this is some epic gamer content</h1>
          </header>
          <h2>bababooey</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus
            vel possimus, eligendi molestiae autem consequuntur? Deserunt vero
            ullam modi!
          </p>
        </div>
      </>
    );
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
