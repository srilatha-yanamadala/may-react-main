import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'fetch';

class MainApp extends Component{
    state = {
        users : []
    }
    componentDidMount(){
        // this.callApi();
    }
    callApi = ()=>{
        Fetch.fetchUrl("https://jsonplaceholder.typicode.com/users", (error,meta, data)=>{
            // console.log(JSON.parse(data).length);
            this.setState({
                users : JSON.parse(data)
            })
        })
    }
    render(){
        return <div>
                    <h1> Accessing Data using Fetch API</h1>
                    <button onClick={ this.callApi }> Get Data </button>
                    <ol>
                    {
                        this.state.users.map((value, idx, arr)=>{
                           return <li key={ idx }> { value.name } </li>
                        })
                    }
                    </ol>
               </div>
    }
}

ReactDOM.render(<MainApp/>, document.getElementById('root'));