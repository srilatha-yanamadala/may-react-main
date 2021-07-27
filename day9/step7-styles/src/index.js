import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "./styles/mystyle.css";
import clientStyle from "./styles/client.module.css";

class MainApp extends Component{
  render(){
    return <div className="container">
      <h1> Styles </h1>
      <hr/>
      <p className="paraStyle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
      <p className="paraStyle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
      <p className="paraStyle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
      <hr/>
      <p className={ clientStyle.box }>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
      <p className="box">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
      <p className="box">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quis laudantium iste accusamus omnis nemo tempora doloribus ad repellat quo exercitationem corrupti, pariatur obcaecati quibusdam impedit alias labore vel.
      </p>
    </div>
  }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));