import { useState } from "react";
import FamilyContext from "../contexts/family.context";
import CousinComp from "./cousin.component";
import ParentComp from "./parent.component";

function GrandComp(){
    let [state, setState] = useState({ message : "Grand parent's message", version : 1001 })
    return <div style={ { border : "2px solid black", 
                          margin : "10px", 
                          padding : "10px"} }>
                <h1>Grand Parent Component</h1>
                <button onClick={()=>{
                    setState({ ...state, message : new Date()+"" })
                }}>Change Message</button>
                <FamilyContext.Provider value={ state }>
                    <ParentComp/>
                    <CousinComp/>
                </FamilyContext.Provider>
           </div>
}

export default GrandComp;