import { useState } from "react";

export default function LudoBoard() {
  let [moves, setmoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [count, setcount] = useState(0);
  let [arr, setArr] = useState(["no moves"]);
  let updateBlue = () => {
    // setmoves((prevMoves)=>{
    //    return {...prevMoves,blue:prevMoves.blue+1}
    // });
    // arr.push("blue moves ");
    setArr((prevArray)=>{
        {return [...prevArray,"blue moves"]}
    });
    console.log(arr);
  };
  let updateYellow = () => {
    setmoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setmoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  let updateRed = () => {
    setmoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  let bgcolor = {
    blue: "blue",
    red: "red",
    yellow: "yellow",
    green: "green",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Game Begins</h2>
      <h3>array={arr}</h3>
      <div className="board">
        <p>Blue moves={moves.blue}</p>
        <button style={{ backgroundColor: bgcolor.blue }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves={moves.yellow}</p>
        <button
          style={{ backgroundColor: bgcolor.yellow }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves={moves.green}</p>
        <button
          style={{ backgroundColor: bgcolor.green }}
          onClick={updateGreen}
        >
          +1
        </button>
        <p>Red moves={moves.red}</p>
        <button style={{ backgroundColor: bgcolor.red }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
