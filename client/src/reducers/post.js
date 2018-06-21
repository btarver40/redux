// This is where I am going to do redux I think
// import React from 'react';
import axios from 'axios';
// import { setFlash } from './flash';
import { setHeaders } from './headers';


const POST = 'POST'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST =  'DELETE_POST'

export const getPost = () => {
  return (dispatch) => {
    axios.get('/api/posts')
    .then(res => {
      const {headers} = res;
    dispatch(setHeaders(headers));
      dispatch({type: POST, posts: res.data })
    })
  }
}


export const addPost = () => {
  export const addPost = (post) => {
    return (dispatch) => {
      axios.post('/api/posts', { post })
        .then( res => {
          dispatch({ type: ADD_POST, post: res.data })
          const {headers} = res;
        dispatch(setHeaders(headers));
        })
    }
  }
}

export const updatePost = () => {
  return (dispatch) => {
    axios.put(`/api/posts/${post.id}`, { post })
      .then( res => {
        dispatch({ type: UPDATE_POST, post: res.data })
        const {headers} = res;
        dispatch(setHeaders(headers));
      })
  }
}


export const deletePost = (id) => {
  return (dispatch) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => {
        const {headers} = res;
      dispatch(setHeaders(headers));
        dispatch({ type: DELETE_POST, id })}
      )    
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case POST:
      return action.posts
    case ADD_POST:
      return [action.post, ...state]
    case UPDATE_POST:
      return state.map(p => {
        if (p.id === action.post.id)
          return action.post
        return p
      })
    case DELETE_POST:
      return state.filter(p => p.id !== action.id)
    default:
      return state
  }
}