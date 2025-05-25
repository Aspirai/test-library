'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// 井字棋游戏
function Square({ value, onSquareClick }) {
  return (
    <button
      className='square'
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row border-solid border-black border-2'>
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className='board-row border-solid border-black border-2'>
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className='board-row border-solid border-black border-2'>
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // 横
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // 竖
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // 斜
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

export default function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const products = [
    {
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    },
    {
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
    },
    {
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
    },
  ];

  const listItems = products.map((product) => (
    <li
      className={product.price === 300 ? 'text-pink-300 hover:text-blue-300' : 'text-[#243c5a] hover:text-[#3182ce]'}
      key={product.name}
    >
      {product.name} - {product.description} - {product.price}
    </li>
  ));

  const [count1, setCount] = useState(0);
  const handleClick = () => {
    alert('Button clicked ' + `${count1}` + ' times');
    setCount(count1 + 1);
  };

  // Custom component
  // state is maintained independently for each component
  function MyButton() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <button
        type='button'
        className='px-4 py-2 text-white bg-blue-500 rounded-md'
        onClick={handleClick}
      >
        Clicked {count} times
      </button>
    );
  }

  useEffect(() => {
    fetch('https://api.github.com/users').then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <ul>{listItems}</ul>
      <button
        type='button'
        className='px-4 py-2 text-white bg-blue-500 rounded-md'
        onClick={handleClick}
      >
        Click me!
      </button>
      <MyButton />
      <MyButton />

      <div className='game'>
        <div className='game-board'>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className='game-info'>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
