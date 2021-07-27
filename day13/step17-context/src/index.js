import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GrandComponent from './components/grand.component';

class MainApp extends Component{
  render(){
    return <GrandComponent/>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));