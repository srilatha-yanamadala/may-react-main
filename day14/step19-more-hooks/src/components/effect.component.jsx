import { useEffect, useState } from 'react';
function EffectComp(){
    let [power, updatePower] = useState(0);
    let [version, manageVersion] = useState(100);

    // runs when the component is loaded
    // componentDidMount
    useEffect(() => { console.log("Component Loaded") }, []);
    // runs when the property version is changed
    // componentDidUpdate
    useEffect(() => { console.log("Version Changed ", version ) }, [version]);
    // runs when this component is removed
    // componentWillUnmount
    useEffect(() => { return ()=>{
        console.log("component is removed ")
    } }, []);

    return <div>
                <h1>Using Effect Hook</h1>
                <h3>Power is : { power }</h3>
                <h3>Version is : { version }</h3>
                <button onClick={ ()=>{ updatePower( power + 1 ) }}>Increase Power</button>
                <button onClick={ ()=>{ manageVersion( Math.round( Math.random() * 1000 ) ) }}>Change Version</button>
            </div>
}

export default EffectComp;