import { Component } from "react";
import ChildComponent from "./child.component";

class ParentComponent extends Component{
    render(){
        return <div  style={ { border : "2px solid red", margin : "10px", padding:"10px"} }>
            <h1>Parent Component</h1>
            <hr/>
            <ChildComponent/>
        </div>
    }
}
export default ParentComponent;