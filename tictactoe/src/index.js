import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

class Board extends React.Component {
  renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)} />
      );
    }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    if (this.state.stepNumber !== (this.state.history.length -1)) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const style = (move) => {
      if (move === this.state.stepNumber) {
        return { fontWeight: 'bold' };
      } else{
        return {};
      }
    }
    const moves = history.map((step, move) => {
      let desc;
      if (move === history.length - 1) {
        desc = 'Current Move'
      } else if (move) {
        desc = 'Move #' + move
      } else {
        desc = 'Game start';
      }
      return (
        <li key={move}>
          <a href = '#' onClick={() => this.jumpTo(move)}
            style={style(move)}
          >{desc}</a>
        </li>
      )
    })
    const newGame = () => {
      if (winner || this.state.stepNumber === 9){
        return (
          <a href ='#' onClick={ () => this.setState({
            history: [{
              squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true
          })}> Play Again</a>
        )
      }
    }

    let status;
    if (winner) {
      status = winner + ' is King!'
    } else if (this.state.stepNumber === 9){
      status = 'Everyone loses in a tie.'
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <h1>{status} {newGame()}</h1>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
