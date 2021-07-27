import React from 'react';
import ReactDOM from 'react-dom';
import EffectComp from './components/effect.component';
import useToggle from './hooks/useToggle';

function MainApp(){
  let [ show, changeShow ] = useToggle(true);
  return <div>
          <h2>Hooks Continued...</h2>
          <hr/>
          <button onClick={ ()=> {
            changeShow( show = !show )
          }}> Show / Hide </button>
          {show ? <EffectComp/> : <h1> Component is hidden </h1> }
        </div>
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));