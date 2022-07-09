import React,{useRef} from "react";

const UseRefHook=()=>{
    const inputRef=useRef(null);
    const submit=()=>{
        console.log(inputRef.current.value)
        inputRef.current.focus()
    }
    return(
       <>
        <input type="text" ref={inputRef}/>
        <button onClick={submit}>Submit</button>
       </>
    )
}
export default UseRefHook;