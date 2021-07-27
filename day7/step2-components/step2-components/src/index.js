import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// let elm = React.createElement("ul", null, React.createElement("li", null, " List Item "), React.createElement("li", null, " List Item "), React.createElement("li", null, " List Item "));;
/*

1. jsx needs one wrapping element / jsx must return a single root element
2. orphan tags needs to be closed
3. if you need to return multiple element and dont want to wrap them in a div use React.Fragment or <>;
4. intropolation using {} 
5. className instead of class attribute
6. htmlFor instead of for attribute on input elements
7. use defaultValue instead of value on input element

*/
/* let elm = function(){
  return <div>
            <article> Article 1 </article>
            <article> Article 2 </article>
            <article> Article 3 </article>
         </div>
};

ReactDOM.render(elm(), document.getElementById('root')); */

/* function Element(){
  return <>
            <div>
                <article> Article 1 </article>
                <article> Article 2 </article>
                <article> Article 3 </article>
              </div>
              <div>
                <article> Article 1 </article>
                <article> Article 2 </article>
                <article> Article 3 </article>
              </div>
          </>
} */

class Article1 extends Component{
  render(){
    return <React.Fragment>
            <article className="box1"> Article 1 Content { this.props.count } 
              <label htmlFor="username"> <input type="text" defaultValue="user name" id="username" /></label>
            </article>
          </React.Fragment>
  }
}
class Article2 extends Component{
  render(){
    return <article className="box2"> Article 2 Content { this.props.count } </article>
  }
}
class Element extends Component{
  render(){
    return <>
            <div>
                <Article1 count="1"/>
                <Article2 count="2"/>
                <Article1 count="3"/>
                <Article2 count="4"/>
            </div>
            <div>
              <Article1 count="5"/>
              <Article2 count="6"/>
              <Article1 count="7"/>
            </div>
          </>
  }
}

ReactDOM.render(<Element/>, document.getElementById('root'));