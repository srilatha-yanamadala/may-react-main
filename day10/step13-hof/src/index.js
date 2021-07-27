import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PowerClick from './components/powerClick';
import PowerMove from './components/powerMove';

class MainApp extends Component{
  state = {
    version : 1001
  }
  render(){
    return <div>
      <h1> Main App Component </h1>
      <PowerClick title="Avengers" ver={ this.state.version }/>
      <PowerMove title="Justice League" ver={ this.state.version }/>
    </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));