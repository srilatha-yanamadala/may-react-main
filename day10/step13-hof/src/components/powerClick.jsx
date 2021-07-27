import { Component } from "react";
import WithPowerBooster from "./withPowerBooster";

class PowerClick extends Component{

    render(){
        return <div>
                    <h1>Power Click Component |  Power is : { this.props.pow }</h1>
                    <h2>Version is : { this.props.ver || 0 }</h2>
                    <h2>Title : { this.props.title }</h2>
                    <button style={ { width : '300px', height : '100px', backgroundColor : '#4ee8c1'}} onClick={ this.props.boostPower }>Increase Power</button>
                </div>
    }
}

// export default PowerClick;
export default WithPowerBooster( PowerClick )