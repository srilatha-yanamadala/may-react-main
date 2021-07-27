import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StateComp from './components/state.component';

class MainApp extends Component{
  render(){
    return <div>
          <h1>Hooks</h1>
          <StateComp/>
        </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));