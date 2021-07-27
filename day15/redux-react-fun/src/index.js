import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// action
const ADD_HERO = "ADD_HERO";
const REMOVE_HERO = "REMOVE_HERO";

// action creator
const addHero = ()=>{
  return {
    type : ADD_HERO
  }
}
const removeHero = ()=>{
  return {
    type : REMOVE_HERO
  }
}

//default state
const initialState = {
  numberOfHeroes : 0
}

// reducer
const heroReducer = ( state = initialState, action)=>{
  switch(action.type){
    case ADD_HERO : return {
      numberOfHeroes : state.numberOfHeroes + 1
    }
    case REMOVE_HERO : return {
      numberOfHeroes : state.numberOfHeroes - 1
    }
    default : return state
  }
}

// store
let store = createStore( heroReducer );

// subscribe
store.subscribe(()=>{
  console.log("store subscribed ", store.getState() )
})

// unsubscribe

class MainApp extends Component{
  herocount = React.createRef();
  render(){
    return <div>
            <h1> React with Redux Fundamentals </h1>
            <h1>Total Number of Avengers Recruited : <span ref={ this.herocount }></span></h1>
            <button onClick={ ()=>{
              store.dispatch( addHero() ) ; 
              this.herocount.current.innerHTML = store.getState().numberOfHeroes
            } }>Add Hero</button>
            <button onClick={ ()=>{
              store.dispatch( removeHero() ); 
              this.herocount.current.innerHTML = store.getState().numberOfHeroes;
            } }>Remove Hero</button>
          </div>
  }
}


ReactDOM.render(<MainApp/>, document.getElementById('root'));