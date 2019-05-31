import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      winner: null,
      activePlayer: 'X',
      squares: []
    };
    for(var i = 0; i < 9; ++i){
      let square = {
        //label: (parseInt(Math.random()*2))? 'x' : 'o'
        label: null
      };
      this.state.squares.push(square);
    }
  }

  reset() {
    const squares = this.state.squares.slice();
    for(var i = 0; i < squares.length; ++i){
      squares[i].label = null;
    }
    this.setState({squares: squares});
    this.setState({winner: null});
    this.setState({activePlayer: 'X'});
  }

  toggleActivePlayer() {
    if(this.state.activePlayer == 'X'){
      this.setState({activePlayer: 'O'});
    } else {
      this.setState({activePlayer: 'X'});
    }
  }

  checkForWin() {
    let lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let line of lines) {
      let str = this.state.squares[line[0]].label + 
        this.state.squares[line[1]].label + 
        this.state.squares[line[2]].label;
      if(str === 'XXX') {
        this.setState({winner: 'X'});
      } else if(str === 'OOO') {
        this.setState({winner: 'O'});
      }
    }
  }

  clickSquare(i) {
    if(!this.state.winner){
      const squares = this.state.squares.slice();
      if(!squares[i].label) {
        squares[i].label = this.state.activePlayer;
        this.setState({squares: squares});
        this.toggleActivePlayer();
        this.checkForWin();
      }
    }
  }

  render() {
    var squares = [];
    for (let i = 0; i < this.state.squares.length; i++) {
      squares.push(<Square data={this.state.squares[i]} key={i} onClick={() => this.clickSquare(i)} />);
    }
    return (
      <div>
        <h1>winner: {this.state.winner}</h1>
        <button onClick={() => this.reset()}>new game</button>
        <div className="board">
          {squares}
        </div>
      </div>
    );
  }
}
