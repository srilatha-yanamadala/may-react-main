import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './child.component';

/*
Creation Mounting
    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()

Updated Updating
    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()


Deleted Unmounting
    componentWillUnmount()

Error Handling 
    static getDerivedStateFromError()
    componentDidCatch()

*/
class MainApp extends Component{
  constructor(){
    super();
    this.state = {
      power : 0,
      show : true
    }
    console.log("Constructor of Main App was called", arguments[0], arguments[1]);
  }
  static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps of Main App was called", arguments[0], arguments[1]);
    return true;
  }
  componentDidMount(){
    console.log("componentDidMount of Main App was called");
  }
  showHideComp = ()=>{
    this.setState({
      show : !this.state.show
    })
  }
  increasePower = ()=>{
    this.setState({
      power : this.state.power += 1
    })
  }
  render(){
    console.log("render of Main App was called");
    return <div>
            <h1>Main App Component | Power is : { this.state.power }</h1>
            <button onClick={ this.showHideComp }>Toggle Child Component</button>
            <button onClick={ this.increasePower }>Increase Power</button>
            <hr/>
            { this.state.show ? <ChildComp pow={ this.state.power }/> : '' }
          </div>
  }
}

ReactDOM.render(<MainApp title="hello"/>, document.getElementById('root'));