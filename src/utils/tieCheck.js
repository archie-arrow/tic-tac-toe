export function tieCheck(board) {
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
  const res = Array(8).fill(null);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const arr = [board[a], board[b], board[c]];
    if (arr.includes("X")) {
      res[i] = "X";
    } else if (arr.includes("O")) {
      res[i] = "O";
    }
  }
  return res.every((item) => item === "O") || res.every((item) => item === "X");
}
