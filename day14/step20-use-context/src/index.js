import React from 'react';
import ReactDOM from 'react-dom';
import GrandComp from './components/grand.component';

function MainApp(){
  return <div>
          <h1>UseContext Hook</h1>
          <hr/>
          <GrandComp/>
        </div>
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));