import { Component } from "react";
import { FamilyProvider } from "../family.context";
import CousingComponent from "./cousin.component";
import ParentComponent from "./parent.component";

class GrandComponent extends Component{
    state = {
        message : 'Hello Child Component '
    }
    changeMessage = ()=>{
        this.setState({
            message : "Updated Message"
        })
    }
    render(){
        return <div  style={ { border : "2px solid red", margin : "10px", padding:"10px"} }>
            <h1>Grand Component</h1>
            <button onClick={ this.changeMessage }>Change Message</button>
            <hr/>
            <FamilyProvider value={ this.state.message }>
                <ParentComponent/>
                <CousingComponent/>
            </FamilyProvider>
        </div>
    }
}
export default GrandComponent;