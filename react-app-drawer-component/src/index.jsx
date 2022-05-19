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
            <div className="container">
              <button className="toggle-drawer" onClick={this.openModal}>
                <i className="fa-solid fa-bars"></i>
              </button>
              <h1>this is some epic gamer content</h1>
            </div>
          </header>
          <div className="container content">
            <h2>bababooey</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              fugit hic autem optio molestiae perferendis nulla omnis eos,
              dolorem repudiandae minus nam, sint possimus neque! Odit fugit
              explicabo harum, repellendus quod modi voluptatem earum, magnam
              eveniet, dolor labore mollitia voluptatum magni ipsa consequuntur.
              Quis facere ipsum error, eaque cumque autem cum corporis
              voluptatem dolore magni obcaecati modi doloribus eos deserunt.
              Consectetur quas ipsa, nulla repellat architecto dolores obcaecati
              inventore quia iure! Neque accusantium ratione ipsam eveniet
              voluptate doloribus dolor laborum quas aut. Ad nostrum expedita
              omnis, iste quae, ratione provident sequi nobis adipisci modi nemo
              non sint saepe sed eligendi?
            </p>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
