import { useContext } from "react";
import FamilyContext from "../contexts/family.context";

function CousinComp(){
    let value = useContext( FamilyContext );
    return <div style={ { border : "2px solid black", 
                          margin : "10px", 
                          padding : "10px"} }>
                <h1>Cousin Component</h1>
                <FamilyContext.Consumer>{ (value)=> <h2>{ value.message }</h2> }</FamilyContext.Consumer>
           </div>
}

export default CousinComp;