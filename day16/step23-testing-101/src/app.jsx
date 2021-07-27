import { Component } from "react";

class MainApp extends Component{
    state = {
        power : 5,
        title : "Batman"
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    render(){
        return <h1> Power now is : { this.state.power }</h1>
    }
}

export default MainApp;