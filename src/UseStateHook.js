import React, { useState } from "react";

const UseStateHook=()=>{
   
    const [counter,setCounter]=useState(0);
    const incrementValue=()=>{
       setCounter(counter+1);
    }
    return(<>
    <h1>{counter}</h1>
    <button onClick={incrementValue}>increment</button>
    </>
    )
}

export default UseStateHook;