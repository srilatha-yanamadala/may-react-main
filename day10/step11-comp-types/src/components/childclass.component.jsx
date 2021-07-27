import { Component } from "react";

class ChildComp extends Component{
    render(){
        console.log("ChildComp's render was called");
        return <div>
                    <h2>Class Child Component</h2>
                    <hr/>
                    <h3>Power is : { this.props.pow } </h3>
                    <h3>Version is : { this.props.ver } </h3>
                </div>
    }
}

export default ChildComp;