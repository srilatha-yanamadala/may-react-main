/* 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class PortalApp extends Component{
  render(){
    return ReactDOM.createPortal(<h2> Contents in Boxer Div Tag </h2>, 
      document.getElementById("boxer"))
  }
}
class MainApp extends Component{
  render(){
    return <div>
            <h1>Portal Application</h1>
            <PortalApp/>
          </div>
  }
}
ReactDOM.render(<MainApp/>, document.getElementById('root')); */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class PortalApp extends Component{
  render(){
    return ReactDOM.createPortal(this.props.children, 
      document.getElementById("boxer"))
  }
}
class MainApp extends Component{
  state = {
    showPopUp : false
  }
  togglePopup = ()=>{
    this.setState({
      showPopUp : !this.state.showPopUp
    })
  }
  render(){
    if(this.state.showPopUp){
      return <PortalApp>
                <div>
                  <h2>Terms and Conditions</h2>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolore, ab, vitae rerum praesentium tempora maiores optio fuga voluptate cumque at ut natus quod amet velit? Quibusdam iure modi architecto.
                  </p>
                  <button onClick={ this.togglePopup }>Hide terms & Conditions</button>
                </div>
              </PortalApp>
    }else{
      return <div>
            <h1>Main Application </h1>
            <p> 
              Show terms and conditions 
              <button onClick={ this.togglePopup }>Show terms & Conditions</button>
            </p>
          </div>
    }
  }
}
ReactDOM.render(<MainApp/>, document.getElementById('root'));