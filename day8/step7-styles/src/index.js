import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
  render(){
    return <div>
      <h1> Styles </h1>
      <hr/>
      <p style={ {
        color : 'darkslateblue',
        backgroundColor : 'cornsilk'
      } }>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
    </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));