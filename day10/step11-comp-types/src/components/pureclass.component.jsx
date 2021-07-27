import { PureComponent } from "react";

class PureComp extends PureComponent{
    render(){
        console.log("PureComp's render was called");
        return <div>
                    <h2>Class Based Pure Component</h2>
                    <hr/>
                    <h3>Power is : { this.props.pow } </h3>
                    <h3>Version is : { this.props.ver } </h3>
                </div>
    }
}

export default PureComp;