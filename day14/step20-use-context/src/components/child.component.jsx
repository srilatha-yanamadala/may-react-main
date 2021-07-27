import { useContext } from "react";
import FamilyContext from "../contexts/family.context";

function ChildComp(){
    let value = useContext( FamilyContext );
    console.log(value);
    return <div style={ { border : "2px solid black", 
                          margin : "10px", 
                          padding : "10px"} }>
                <h1>Child Component</h1>
                <FamilyContext.Consumer>{ (value)=> <hgroup> <h2>{ value.message }</h2> <h3>{ value.version }</h3> </hgroup> }</FamilyContext.Consumer>
           </div>
}

export default ChildComp;