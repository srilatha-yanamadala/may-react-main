import { Component } from "react";
import { FamilyConsumer } from "../family.context";

class ChildComponent extends Component{
    render(){
        return <div style={ { border : "2px solid red", margin : "10px", padding:"10px"} }>
            <h1>Child Component</h1>
            <hr/>
            <FamilyConsumer>
                {
                    (value) => <h2>{value}</h2>
                }
            </FamilyConsumer>
        </div>
    }
}
export default ChildComponent;