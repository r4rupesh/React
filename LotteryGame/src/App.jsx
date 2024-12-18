import Lottery from "./Lottery"
import Ticket from "./Ticket"
import { sum } from "./helper";
function App() {
  let winCondition = (ticket)=>{
    return sum(ticket)===15;
  }
  return (
    <>
      <div>
       <Lottery n={3} winningSum={15} winCondition={winCondition}/>
      </div>
    </>
  )
}

export default App
