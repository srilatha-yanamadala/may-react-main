import { Component } from "react";
import WithPowerBooster from "./withPowerBooster";

class PowerMove extends Component{
    render(){
        return <div>
                    <h1>Power Move Component |  Power is : { this.props.pow }</h1>
                    <h2>Version is : { this.props.ver || 0 }</h2>
                    <h2>Title : { this.props.title }</h2>
                    <div onMouseMove={ this.props.boostPower } style={ { 
                        width : '300px',
                        height : '100px',
                        backgroundColor : 'crimson',
                        textAlign : 'center',
                        color : 'whitesmoke',
                        lineHeight : '100px',
                        fontWeight : 'bold',
                        fontFamily : 'Arial'
                        } }> Move Mouse Over to Increase Power</div>
                </div>
    }
}

// export default PowerMove;
export default WithPowerBooster( PowerMove )