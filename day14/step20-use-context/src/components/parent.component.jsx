import ChildComp from "./child.component";

function ParentComp(){
    return <div style={ { border : "2px solid black", 
                          margin : "10px", 
                          padding : "10px"} }>
                <h1>Parent Component</h1>
                <ChildComp/>
           </div>
}

export default ParentComp;