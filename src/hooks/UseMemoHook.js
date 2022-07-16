import React, { useState,useMemo } from "react";

const UseMemoHook=()=>{
    const [counterOne,setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]=useState(0);

    const incrementCounter1=()=>{
        setCounterOne(counterOne+1)
    }

    const incrementCounter2=()=>{
        setCounterTwo(counterTwo+1)
    }

    const isEven=useMemo(()=>{
        console.warn("....")
        let i=0;
        while(i<200000000){
           
            i++;
        }
        return counterOne%2===0;
    },[counterOne])
    
    return(
      <>
       <button onClick={incrementCounter1}>Counter {counterOne}</button> 
     <p>{isEven?"even":"odd"}</p>  
       <button  onClick={incrementCounter2}>Counter {counterTwo}</button> 
      </>
    )
}
export default UseMemoHook;