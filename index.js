import React, { Component } from 'react';
import { render } from 'react-dom';
import Square from './Square';
import Board from './Board';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React tic-tac-toe',
    };
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.name}
        </h1>
        <div className="board-wrapper">
          <Board />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
