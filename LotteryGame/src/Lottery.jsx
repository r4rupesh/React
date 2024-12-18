import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinnig = winCondition(ticket);
  let buyTicket=()=>{
    setTicket(genTicket(n));
  }
  return (
    <div className="container">
      <h1>Lottery Game</h1>
      <h3>{isWinnig && "Congratulaions,You Won"}</h3>
        <Ticket ticket={ticket}/>
        <br />
        <button onClick={buyTicket}>Buy New Ticket</button>
    </div>
  );
}
