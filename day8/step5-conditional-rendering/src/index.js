import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
  state = {
    power : 0,
    agree : false
  }
  changeAgree = ()=>{
    this.setState(function(prevState, compProp){
      return {
        agree : !prevState.agree
      }
    })
  }
  changePower = () => {
    this.setState(function(prevState, compProp){
      return {
        power : prevState.power + 1
      }
    })
  }
  render(){
     /*  if( this.state.power >= 5 ){
        return <h1>Hero is Strong </h1>
      }else{
        return <h1>Hero not ready t
        o fight </h1>
      } */
      return <div>
      <h1>Conditional Rendering</h1>
      <h2>Power : { this.state.power } | Agree Terms : { this.state.agree.toString() }</h2>
      
      { this.state.power >= 5 ? <h1>Hero is Strong </h1> : <h1>Hero not ready to fight </h1> }
      
      <button onClick={ this.changePower }>Increase Power </button>
      {
        this.state.agree === true ? <div> Agreed </div> : <div className="box">
        Terms and Conditions
        <hr/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur quasi molestiae provident, soluta ea exercitationem nostrum fugiat voluptatem est perspiciatis tempora, velit sit optio, dolorum ullam consectetur cumque recusandae.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur quasi molestiae provident, soluta ea exercitationem nostrum fugiat voluptatem est perspiciatis tempora, velit sit optio, dolorum ullam consectetur cumque recusandae.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur quasi molestiae provident, soluta ea exercitationem nostrum fugiat voluptatem est perspiciatis tempora, velit sit optio, dolorum ullam consectetur cumque recusandae.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate aspernatur quasi molestiae provident, soluta ea exercitationem nostrum fugiat voluptatem est perspiciatis tempora, velit sit optio, dolorum ullam consectetur cumque recusandae.
        <br/>
        <br/>
        <button onClick={ this.changeAgree }> Agree to Terms </button>
      </div>
      }
    </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));