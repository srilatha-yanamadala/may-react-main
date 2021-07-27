import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// let justiceLeague = ['Batman', 'Superman', 'Aquaman', 'Flash', 'Wonder Women', 'Cyborg', 'Green Lantern', 'Namor'];

// let avengers = ['Ironman', 'Thor', 'Hulk', 'Vision', 'Black Widow', 'Spiderman', 'Black Panther' ];

/* let elm = <ol>
            <li>{ justiceLeague[0] }</li>
            <li>{ justiceLeague[1] }</li>
            <li>{ justiceLeague[2] }</li>
            <li>{ justiceLeague[3] }</li>
            <li>{ justiceLeague[4] }</li>
            <li>{ justiceLeague[5] }</li>
            <li>{ justiceLeague[6] }</li>
          </ol> */

// let elm = <ol>{ justiceLeague.map((val, idx) => <li key={ idx }>{ val }</li> ) }</ol>

class HeroesList extends Component{
  // defaultProps and PropTypes are reserved key words 
  // static defaultProps = {
  //   version : 0
  // }
  // static propTypes = {
  //   version : PropTypes.number,
  //   title : PropTypes.string.isRequired
  // }
/*   clickHandler = () => {
    // alert("you clicked me");
    // this.props.version = 2021;
  } */

/* 
  constructor(props){
    super(props);
    this.state = {
      quantity : 0
    }
  } 
*/

/*   state = {
        quantity : 0
      }

  increaseHandler = () => {
    this.setState({
      quantity : this.state.quantity += 1
    })
  }
  decreaseHandler = () => {
    this.setState({
      quantity : this.state.quantity -= 1
    }) */

    state={
          quantity:0
        }

    increaseHandler = () => {
      this.setState({ 
      quantity:this.state.quantity += 1
      })
    }
    decreaseHandler = () => {
      this.setState({ 
        quantity:this.state.quantity -= 1
    })
  }
  render(){
    return <div>
              <h1>{ this.props.title } | version : { this.props.version + 10  }</h1>
            <ol>
              { 
                this.props.team.map((val, idx) => <li key={ idx }>{ val }</li> ) 
              }
            </ol>
            <h2>{ this.props.children }</h2>
            <h3> Quantity in Stock : { this.state.quantity } </h3>
            <button onClick={ this.increaseHandler }> Increase Quantity  </button>
            <button onClick={ this.decreaseHandler }> Decrease Quantity  </button>
          </div>
  }
}

HeroesList.defaultProps = {
  version : 0,
  title : "Default App Title"
}
HeroesList.propTypes = {
  version : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired
}

class App extends Component{
  justiceLeague = ['Batman', 'Superman', 'Aquaman', 'Flash', 'Wonder Women', 'Cyborg', 'Green Lantern', 'Namor'];
  avengers = ['Ironman', 'Thor', 'Hulk', 'Vision', 'Black Widow', 'Spiderman', 'Black Panther' ];

  render(){
    return <div>
            <HeroesList version={ 1001 } team={ this.justiceLeague }> Comming Soon </HeroesList>
            <HeroesList title='Avengers' team={ this.avengers } />
          </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));