import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./style/formstyle.css";

class FormComp extends Component{
  state = {
    username : "",
    userage : 0,
    ageError : ""
  }
  nameChangeHandler = ( evt )=>{
    this.setState({
      username : evt.target.value
    })
  }
  ageChangeHandler = ( evt )=>{
    this.setState({
      userage : evt.target.value
    })
  }
  submitHandler = (evt)=>{
    evt.preventDefault();
    if(this.state.username === "" && this.state.userage === 0){
      alert("Please fill the details required");
    }else{
      if( this.state.userage < 18 ){
        //alert("you are too young to join us");
        this.setState({
          ageError : "you are too young to join us"
        })
      }else if(this.state.userage > 100 ){ 
        //alert("you are too old to join us");
        this.setState({
          ageError : "you are too old to join us"
        })
      }else{
        this.setState({
          ageError : ""
        })
        evt.target.submit();
      }
    }
  }
  render(){
    return <div>
              <div className="box">
                <h1>User Registeration Form</h1>
                <hr/>
                <form onSubmit={ this.submitHandler } action="#" name="formData">
                  <label htmlFor="username">User Name : </label>
                    <input type="text" id="username" onChange={ this.nameChangeHandler } name="userName" value={this.state.username}/>
                  <label htmlFor="userage">User Age : </label>
                    <input type="number" id="userage" onChange={ this.ageChangeHandler } name="userAge" value={this.state.userage}/>
                    <span>{ this.state.ageError }</span>
                  <br/>
                  <button>Submit</button>
                </form>
              </div>
              <hr/>
              <p>User Name : { this.state.username }</p>
              <p>User Age : { this.state.userage }</p>
          </div>
  }
}

ReactDOM.render(<FormComp/>, document.getElementById('root'));