import { useState } from "react";

export default function Counter(){
  let [count,setCount] = useState(0) //initialization ignore by react.
   console.log("comoponent is rendered!");
   console.log(`count=${count}`)
  let incCount=()=>{
      setCount(count+1);
      console.log(`inside count,count=${count}`);
  }

    return (
        <div style={{textAlign:"center"}}>
            <h3>
                Count = {count}
            </h3>
            <button onClick={incCount}>Icrease Count</button>
        </div>
    );
}

