import streams from '../apis/streams';
import history from '../history';

import {SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types'; 
// Easy to find Error  if we assign actions in type.js 

export const signIn = (userId)=>{
    return{
        type:SIGN_IN,
        payload:userId
    }
};

export const signOut = () =>{
    return{
        type:SIGN_OUT
    }
};

//automatically redux thunk 2 arguemnt => dispatch and getState 
export const createStream = formValue => async( dispatch, getState)=>{
    const {userId} = getState().auth;
    const response = await streams.post('/streams',{...formValue, userId});
dispatch ({type : CREATE_STREAM, payload: response.data});

// programmatic navigation to root route
history.push('/');
};

export const fetchStreams = () => async dispatch =>{
    const response = await streams.get('/streams');
dispatch ({type:FETCH_STREAMS, payload:response.data});
};

export const fetchStream = (id) => async dispatch =>{
   const response = await streams.get(`/streams/${id}`);
dispatch({type:FETCH_STREAM, payload: response.data});
};

export const editStream = (id,formValue)=> async dispatch =>{
    const response = await streams.patch(`/streams/${id}`,formValue);
    //put to patch changed for update 
dispatch({type: EDIT_STREAM, payload: response.data});
history.push('/');
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
dispatch({type: DELETE_STREAM,payload: id});
history.push('/')
};