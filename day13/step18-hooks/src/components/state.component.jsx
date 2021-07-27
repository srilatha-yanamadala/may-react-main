import {useState} from 'react';

function StateComp(){
    // console.log(useState());   
    let [power, updatePower] = useState(5) ;// default value is 5
    let [username, updateUserName] = useState('vijay') ;// default value is 5
    let [heroname, modifyHeroName] = useState({ firstName : 'Tony', lastName : 'Stark' })
    return <div>
                <h1>Hello From State Component</h1>
                <h2>Power is : { power }</h2>
                <button onClick={ ()=>{
                    updatePower(power+1)
                }}>Increase Power</button>
                <button onClick={ ()=>{
                    updatePower(power-1)
                }}>Decrease Power</button>
                <hr />
                <h2>User Name  is : { username }</h2>
                <button onClick={ ()=>{ updateUserName('Guest')  }}>Change Name</button>
                <hr />
                <h2>
                    First Name : { heroname.firstName } <br/>
                    Last Name : { heroname.lastName } <br/>
                </h2>
                <label htmlFor="heroFirstName">First Name : 
                    <input id="heroFirstName" value={ heroname.firstName } onChange={ (evt)=>{ modifyHeroName({ ...heroname, firstName : evt.target.value }) }}/>
                </label>
                <br />
                <label htmlFor="heroLastName">Last Name : 
                    <input id="heroLastName" value={ heroname.lastName } onChange={ (evt)=>{ modifyHeroName({ ...heroname, lastName : evt.target.value }) }}/>
                </label>
            </div>
}

export default StateComp;