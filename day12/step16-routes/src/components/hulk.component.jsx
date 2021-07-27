import { Component } from "react";

class HulkComponent extends Component {
    render() {
        return <div>
                    <h1>Hulk Component</h1>
                    <h2>Quantity is : { this.props.match.params.qty }</h2>
               </div>
    }
}

export default HulkComponent;