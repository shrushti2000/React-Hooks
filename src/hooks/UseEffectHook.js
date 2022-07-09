import React, { useEffect, useState } from "react"

const UseEffectHook=()=>{
    const [counter,setCounter]=useState(0);

    console.log("before useeffect")
    useEffect(()=>{
        console.log("useEffect runned")
        setCounter(1);
    },[])
    console.log("after useeffect")
    return(
      <>
        <h2>useEffect hook demo</h2>
        <h2>{counter}</h2></>
    )
}
export default UseEffectHook;