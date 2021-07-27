import ReactDOM from 'react-dom';
import AjaxComp from './components/ajax.component';

function MainApp(){
  return <div>
          <h2>Hooks Continued...</h2>
           <AjaxComp/>
        </div>
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));