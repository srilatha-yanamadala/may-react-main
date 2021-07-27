import { Component } from "react";
import { BrowserRouter, Link, Route, NavLink, Switch } from 'react-router-dom';
import BlackWidow from "./components/blackwidow.component";
import HomeComponent from "./components/home.component";
import HulkComponent from "./components/hulk.component";
import NotFoundComponent from "./components/notfound.component";
import "./mystyle.css";

class MainApp extends Component {
    state = {
        quantity : 0
    }
    changeHandler = (evt)=>{
        this.setState({
            quantity : evt.target.value
        })
    }
    render() {
        return <div>
                <h1>Hello from MainApp</h1>  
                <input type="range" value={ this.state.quantity } onChange={ this.changeHandler } />
                Quantity is : { this.state.quantity }
                <hr />
                <BrowserRouter>
                <ul>
                    <li> <NavLink activeClassName="boxer" exact to="/">Home</NavLink> </li>
                    <li> <NavLink activeClassName="boxer" to={"/hulk/"+this.state.quantity}>Hulk</NavLink> </li>
                    <li> <NavLink activeClassName="boxer" to="/blackwidow">Black Widow</NavLink> </li>
                    <li> <NavLink activeClassName="boxer" to="/ironman">Ironman</NavLink> </li>
                </ul>
                    <Switch>
                        <Route path="/" exact component={ HomeComponent }/>
                        <Route path="/hulk/:qty" component={ HulkComponent }/>
                        <Route path="/blackwidow" component={ BlackWidow }/>
                        <Route component={ NotFoundComponent }/>
                    </Switch>
                </BrowserRouter> 
               </div>
    }
}

export default MainApp;