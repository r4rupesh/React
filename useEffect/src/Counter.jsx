import { useEffect } from "react";
import { useState } from "react"

export default function Counter(){
    let [counterX,setCounterX] =useState(0);
    const increase1=()=>{setCounterX(counterX+1)}
    let [counterY,setCounterY] =useState(0);
    const increase2=()=>{setCounterY(counterY+1)}
    useEffect(()=>{
        console.log("this is side effect");
    },[]);
    return(
        <>
        <div>
            <h2>Counter</h2>
            <h3>Counter={counterX}</h3>
            <button onClick={increase1}>+1</button>

        </div>
        <div>
            <h2>Counter</h2>
            <h3>Counter={counterY}</h3>
            <button onClick={increase2}>+1</button>

        </div>
        </>
    )
}