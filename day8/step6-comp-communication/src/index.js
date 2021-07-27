import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/childComp';

class MainApp extends Component{
  state = {
    quantity : 0,
    apptitle : 'default app title'
  }
  increaseQuantity = () =>{
    this.setState({
      quantity : this.state.quantity += 1
    })
  }
  changeAppTitle = (ntitle) => {
    this.setState({
      apptitle : ntitle
    })
  }
    render(){
        return <div>
                  <h1>Main App Component | Quantity : { this.state.quantity } | Title : { this.state.apptitle }</h1>
                  <button onClick={ this.increaseQuantity }>Increase Quantity</button>
                  <hr />
                <ChildComp handlerFun={ this.changeAppTitle } title={ this.state.apptitle } qty={ this.state.quantity }/>
              </div>
    }
}


ReactDOM.render(<MainApp/>, document.getElementById('root'));