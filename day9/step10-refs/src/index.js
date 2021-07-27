import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
  state = {
    compVal : ''
  }
  ptag = React.createRef();
  iptag = React.createRef();
  box = React.createRef();
  clickHandler = ()=>{
    alert("P Tag's content is : "+this.ptag.current.innerHTML )
  }
  inputChangeHandler = ()=>{
    alert("P Tag's content is : "+this.iptag.current.value )
  }
  getClassHandler = ()=>{
    alert("H1 Tag's class is : "+this.box.current.getAttribute("class") )
  }
  render() {
    return <div>
      <h1 ref={ this.box } className="player">Main App Component</h1>
      <button onClick={ this.clickHandler }> Get P tag's content </button>
      <button onClick={ this.inputChangeHandler }> Get Input tag's value </button>
      <button onClick={ this.getClassHandler }> Get h1 tag's class name </button>
      <hr/>
      <input ref={ this.iptag } defaultValue="placeholder"/>
      <p ref={ this.ptag }> Placeholder text </p>
    </div>;
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));