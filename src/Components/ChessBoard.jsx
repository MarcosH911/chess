import { useState } from "react";

import ChessTile from "./ChessTile";
import BlackRook from "./chess-pieces/black/BlackRook";
import BlackBishop from "./chess-pieces/black/BlackBishop";
import BlackPawn from "./chess-pieces/black/BlackPawn";
import BlackKnight from "./chess-pieces/black/BlackKnight";
import BlackKing from "./chess-pieces/black/BlackKing";
import BlackQueen from "./chess-pieces/black/BlackQueen";
import WhiteRook from "./chess-pieces/white/WhiteRook";
import WhiteBishop from "./chess-pieces/white/WhiteBishop";
import WhitePawn from "./chess-pieces/white/WhitePawn";
import WhiteKnight from "./chess-pieces/white/WhiteKnight";
import WhiteKing from "./chess-pieces/white/WhiteKing";
import WhiteQueen from "./chess-pieces/white/WhiteQueen";

function createStartingBoard() {
  const board = Array.apply(null, Array(8)).map(() =>
    Array.apply(null, Array(8)),
  );
  board[0][0] = board[0][7] = <BlackRook />;
  board[0][1] = board[0][6] = <BlackKnight />;
  board[0][2] = board[0][5] = <BlackBishop />;
  board[0][3] = <BlackQueen />;
  board[0][4] = <BlackKing />;
  for (let i = 0; i < 8; i++) {
    board[1][i] = <BlackPawn />;
  }

  board[7][0] = board[7][7] = <WhiteRook />;
  board[7][1] = board[7][6] = <WhiteKnight />;
  board[7][2] = board[7][5] = <WhiteBishop />;
  board[7][3] = <WhiteQueen />;
  board[7][4] = <WhiteKing />;
  for (let i = 0; i < 8; i++) {
    board[6][i] = <WhitePawn />;
  }

  return board;
}

function ChessBoard() {
  const [chessBoard, setChessBoard] = useState(createStartingBoard());
  console.log(chessBoard);

  return (
    <div className="grid h-[min(80vh,80vw)] w-[min(80vh,80vw)] grow-0 grid-cols-8 grid-rows-8 border-2 border-black">
      {chessBoard.map((row, i) =>
        row.map((chessPiece, j) => (
          <ChessTile
            key={i * 10 + j}
            type={(i + j) % 2 != 0 ? "black" : "white"}
          >
            {chessPiece}
          </ChessTile>
        )),
      )}
    </div>
  );
}

export default ChessBoard;
