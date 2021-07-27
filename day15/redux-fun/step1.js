const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");
//--------------------------------
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

// actions
const AXIOS_USER_REQUEST = "AXIOS_USER_REQUEST";
const AXIOS_USER_SUCCESS = "AXIOS_USER_SUCCESS";
const AXIOS_USER_ERROR = "AXIOS_USER_ERROR";

// action creators
const fetchUsers = ()=>{
    return { 
        type : AXIOS_USER_REQUEST
    }
}
const fetchUserSuccess = (users)=>{
    return { 
        type : AXIOS_USER_SUCCESS,
        payload : users
    }
}
const fetchUserError = (error)=>{
    return { 
        type : AXIOS_USER_ERROR,
        payload : error
    }
}

// initial states
const initialState = {
    loading : false,
    users : [],
    error : ''
}

// reducers
const reducer = ( state = initialState, action )=>{
    switch(action.type){
        case AXIOS_USER_REQUEST : return{
            ...state,
            loading : true
        }
        case AXIOS_USER_SUCCESS : return{
            ...state,
            loading : false,
            users : action.payload,
            error : ''
        }
        case AXIOS_USER_ERROR : return{
            ...state,
            loading : false,
            users : [],
            error : action.payload
        }
        default : return state
    }
}

// thunk action
const thunkFetchUsers = ()=>{
    return function(dispatch){
        dispatch( fetchUsers() );
    }
}

// thunk ajax call
const thunkAjaxFetchUsers = ()=> {
    return function(dispatch){
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            dispatch( fetchUserSuccess(res.data))
        })
        .catch((err)=>{
            dispatch( fetchUserError(err))
        })
    }
}


// store
const store = createStore( reducer, applyMiddleWare( thunkMiddleWare ) );

// subscribe
const unsubscribe = store.subscribe(()=>{
    console.log("store subscribed", store.getState() );
});

store.dispatch( thunkFetchUsers() );

setTimeout(()=>{
store.dispatch( thunkAjaxFetchUsers() )
},2000)

// unsubscribe
// unsubscribe();
