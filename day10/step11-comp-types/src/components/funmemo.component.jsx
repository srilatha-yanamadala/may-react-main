import React from 'react';
function FunMemoComp(props){
    console.log("FunMemoComp was rendered");
    return <div>
                <h2>Function based memo Component</h2>
                <hr/>
                <h3>Power is : { props.pow } </h3>
                <h3>Version is : { props.ver } </h3>
            </div>
}

export default React.memo( FunMemoComp );