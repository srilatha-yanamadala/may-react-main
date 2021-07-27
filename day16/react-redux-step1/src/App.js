import React from 'react';
import {connect} from 'react-redux';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers';

//Render Redux Cycle into App
function App(props) {
  return (
    <div className="App">
      <h3>REDUX MOVIELIST APP</h3>
      YOUR CURRENT MOVIE IS: {props.movies.name}
      <br/>
      <button onClick={props.updateMovies}>SELECT NEW MOVIE</button>
      <br/>
      {props.users.length === 0 ?
      <p>THERE ARE NO USERS</p> :
      props.users.map(user=> <p key={user.id}>{user.first_name} - {user.email}</p>)}
      <br/>
      <button onClick={props.fetchUsers}>FETCH USERS</button>
    </div>
  );
};

//Make State accessible to movies and users in App.
const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users
  };
};

// Setup Dispatch for our button events. 
const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: ()=> dispatch(updateMovies),
    fetchUsers: ()=> dispatch(fetchUsers)
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
