import React, { useState } from "react";

import Board from "./Board";
import NamesPopup from "./NamesPopup";

import { calculateWinner } from "../utils/calculateWinner";
import { setStrikeStyle } from "../utils/setStrikeStyle";
import { tieCheck } from "../utils/tieCheck";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [xIsNext, setXisNext] = useState(true);
  const [playerNames, setPlayerNames] = useState({
    player1: "Player 1",
    player2: "Player 2",
  });
  const [playerScore, setPlayerScore] = useState({
    player1: 0,
    player2: 0,
  });
  const xO = xIsNext ? "X" : "O";

  const updateScore = (winner) => {
    if (winner === "X") {
      setPlayerScore({ ...playerScore, player1: ++playerScore.player1 });
    } else if (winner === "O") {
      setPlayerScore({ ...playerScore, player2: ++playerScore.player2 });
    }
    return;
  };

  React.useEffect(() => {
    setWinner(calculateWinner(board));
    if ((!winner && !board.some((item) => item === null)) || tieCheck(board)) {
      alert("Ничья!");
      setBoard(Array(9).fill(null));
      setXisNext(true);
    }
  }, [board, winner]);

  const handleClick = (i) => {
    if (!winner && !board[i]) {
      const prev = board.slice(0, i);
      const next = board.slice(i + 1);

      setBoard([...prev, xO, ...next]);
      setXisNext(!xIsNext);
    }
    if (winner) {
      updateScore(winner[0]);
      setBoard(Array(9).fill(null));
      setWinner(null);
      setXisNext(true);
    }
  };

  const handleShowContent = () => {
    setShowContent(true);
  };

  const handlePlayerNames = (e) => {
    e.preventDefault();

    const target = e.target;
    setPlayerNames({ ...playerNames, [target.name]: target.value });
  };

  return (
    <div className="wrapper">
      {showContent ? (
        <div className="content">
          <Board
            squares={board}
            onClick={handleClick}
            style={setStrikeStyle(winner && winner[1])}
          />
          <div className="score">
            <h1 className="score__title">Score</h1>
            <p className="score__player">
              {playerNames.player1}: {playerScore.player1}
            </p>
            <p className="score__player">
              {playerNames.player2}: {playerScore.player2}
            </p>
          </div>
        </div>
      ) : (
        <NamesPopup
          handlePlayerNames={handlePlayerNames}
          handleShowContent={handleShowContent}
        />
      )}
    </div>
  );
}
