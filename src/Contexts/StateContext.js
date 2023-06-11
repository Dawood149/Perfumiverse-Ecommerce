import React from "react";
import birthContext from "./createContext";

const StateContext=(props)=>{
    const state={
        "name":"Dawood",
        "age":"23"
    }

    return (

        <birthContext.Provider value={state}>
            {props.children}
        </birthContext.Provider>
    )
}

export default StateContext;