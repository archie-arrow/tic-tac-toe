import React from "react";

import Square from "../Square/Square";

export default function Board({ squares, onClick, style }) {
  return (
    <div className={style ? `board ${style}` : "board"}>
      {squares.map((square, i) => {
        return <Square key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
}
