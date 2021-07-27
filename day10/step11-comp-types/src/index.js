import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/childclass.component';
import FunComp from './components/funchild.component';
import PureComp from './components/pureclass.component';
import FunMemoComp from './components/funmemo.component';

class MainApp extends Component{
  state = {
    power : 0,
    version : 0
  }

  increasePower = ()=>{
    this.setState({
      power : 5
    })
  }
  increaseVersion = ()=>{
    this.setState({
      version : this.state.version += 1
    })
  }
  render(){
    console.log("MainApp's render was called");
    return <div>
      <h1>Power in Parent Component : { this.state.power } </h1>
      <button onClick={ this.increasePower }>Increase Power</button>
      <button onClick={ this.increaseVersion }>Increase Version</button>
      <hr/>
      <ChildComp ver={ this.state.version } pow={ this.state.power }/>
      <FunComp ver={ this.state.version } pow={ this.state.power }/>
      <PureComp ver={ this.state.version } pow={ this.state.power }/>
      <FunMemoComp ver={ this.state.version } pow={ this.state.power } />
    </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));