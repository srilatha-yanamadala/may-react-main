import { Component } from "react";

let WithPowerBooster = ( OriginalComp ) => {
    class NewComp extends Component{
        state = {
            power : 0
        }
        increasePower = ()=>{
            this.setState({
                power : this.state.power += 1
            })
        }
        render(){
            /* return <OriginalComp 
            parentTitle={ this.props.title } 
            parentProps={ this.props.ver } 
            pow={ this.state.power }
            boostPower={ this.increasePower } /> */

            return <OriginalComp 
            pow={ this.state.power }
            boostPower={ this.increasePower } { ...this.props } />
        }
    }
    return NewComp
};

export default WithPowerBooster;