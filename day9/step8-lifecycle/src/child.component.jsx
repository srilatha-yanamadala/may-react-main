import { Component } from "react";

class ChildComp extends Component{
    constructor(){
        super();
        this.state = {
            power : 10
        };
        console.log("Constructor of ChildComp was called");
    }
    static getDerivedStateFromProps(propObj){
        console.log("getDerivedStateFromProps of ChildComp was called");
        return {
            power : propObj.pow
        };
    }
    shouldComponentUpdate(propsObj){
        console.log("shouldComponentUpdate of ChildComp was called");
        if(propsObj.pow > 10){
            return false;
        }else{
            return true;
        }
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate of ChildComp was called");
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate of ChildComp was called");
    }
    componentDidMount(){
        console.log("componentDidMount of ChildComp was called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount of ChildComp was called");
    }
    render(){
        console.log("render of ChildComp was called");
        return <div>
                <h1>Child Component | Power is : { this.state.power }</h1>
                <hr />
               </div>
    }
}

export default ChildComp;