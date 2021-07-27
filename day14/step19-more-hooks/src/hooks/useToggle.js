import { useState } from 'react';
function useToggle(initVal = false){
    const [ state, setToggle ] = useState( initVal );

    let toggle = ()=>{
        setToggle( !state )
    }
    
    return [state, toggle]
}

export default useToggle;