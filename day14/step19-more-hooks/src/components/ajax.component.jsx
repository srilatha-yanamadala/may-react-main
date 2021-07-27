import { useEffect, useState } from "react";
import fetch from 'fetch';

function AjaxComp(){
 let [ users, fetchUsers ] = useState([]);
 useEffect(()=>{
    fetch.fetchUrl("https://jsonplaceholder.typicode.com/users", (error, meta, data)=>{
        if(error){
            console.log("Error : ", error);
        }else{
            fetchUsers(JSON.parse(data));
        }
    })
 },[])
 return <div>
            <h1>Ajax Example with Hooks</h1>
            <hr />
            <ol>{
                    users.map(( val, idx )=> {
                        return <li key={idx}>{ val.name }</li>
                    })
                }</ol>
        </div>   
}

export default AjaxComp;