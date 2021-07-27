function FunComp(props){
    console.log("FunComp was rendered");
    return <div>
                <h2>Function Child Component</h2>
                <hr/>
                <h3>Power is : { props.pow } </h3>
                <h3>Version is : {props.ver } </h3>
            </div>
}

export default FunComp;