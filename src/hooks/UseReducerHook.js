import React,{useReducer} from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT_COUNTER":return {...state,counter:state.counter+1}
        case "TOGGLE_TEXT":return {...state,showText:!state.showText}
        default: return state
    }
}

const UserReducerHook=()=>{
    const [state,dispatch]=useReducer(reducer,{counter:0,showText:true})
    const performAction=()=>{
        dispatch({type:"INCREMENT_COUNTER"})
        dispatch({type:"TOGGLE_TEXT"})
    }
    return(
        <>
        <h3>{state.counter}</h3>
        <button onClick={performAction}>Increment counter and toggle texts</button>
       {state.showText &&  <h3>This is text</h3>}
        </>
    )
}

export default UserReducerHook;