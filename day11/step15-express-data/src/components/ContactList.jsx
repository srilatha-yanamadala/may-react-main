import { Component } from "react";
import axios from 'axios';

class ContactList extends Component{
    state = {
        contactlist : [],
        contactFirstname : '',
        contactLastname : '',
        contactCity : '',
        contactPower : ''
    }
    componentDidMount(){
        this.reload();
    }
    reload = ()=>{
        axios.get("http://localhost:3030/data").then((res)=>{
            this.setState({
                contactlist : res.data
            })
        }).catch((error)=>{
            console.log("Error : ", error)
        })
    }
    firstnameChangeHandler = (evt)=>{
        this.setState({
            contactFirstname : evt.target.value
        })
    }
    lastnameChangeHandler = (evt)=>{
        this.setState({
            contactLastname : evt.target.value
        })
    }
    cityChangeHandler = (evt)=>{
        this.setState({
            contactCity : evt.target.value
        })
    }
    powerChangeHandler = (evt)=>{
        this.setState({
            contactPower : evt.target.value
        })
    }
    render(){
        return <div className="container">
                    <h1> My Contacts Online </h1>
                    <hr />
                    <form onSubmit={ this.submitHandler }>
                        <label htmlFor=""> First Name : 
                            <input value={ this.state.contactFirstname } onChange={ this.firstnameChangeHandler }/>
                        </label>
                        <label htmlFor=""> Last Name : 
                            <input value={ this.state.contactLastname } onChange={ this.lastnameChangeHandler }/>
                        </label>
                        <label htmlFor=""> City : 
                            <input value={ this.state.contactCity } onChange={ this.cityChangeHandler }/>
                        </label>
                        <label htmlFor=""> Power : 
                            <input value={ this.state.contactPower } onChange={ this.powerChangeHandler }/>
                        </label>
                    </form>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>City</th>
                                <th>Power</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            this.state.contactlist.map((value, idx, arr)=>{
                            return <tr key={ idx }>
                                    <td>{ idx + 1 }</td>
                                    <td>{ value.firstname }</td>
                                    <td>{ value.lastname }</td>
                                    <td>{ value.city }</td>
                                    <td>{ value.power }</td>
                                    <td>
                                        <button className="btn btn-warning">Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                    </table>
                </div>
    }
};

export default ContactList;