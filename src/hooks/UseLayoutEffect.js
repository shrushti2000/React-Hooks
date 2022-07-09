import React, { useEffect, useLayoutEffect, useState } from "react"

const UseLayoutEffectHook=()=>{
    const [counter,setCounter]=useState(0);
    console.log("before use layout effect")
    useEffect(()=>{
        console.log("useEffect runned")
       
    })
    useLayoutEffect(()=>{
        console.log("use layout effect runned")
    })

     console.log("before useeffect")
    useEffect(()=>{
        console.log("useEffect runned")
       
    })
     console.log("after useeffect")
    return(
      <>
        <h2>useEffect hook demo</h2>
        <h4>use layout effect runs before useeffect</h4>
        <h2>{counter}</h2></>
    )
}
export default UseLayoutEffectHook;