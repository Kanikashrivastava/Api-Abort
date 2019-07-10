import axios from 'axios';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'

export const indexServices = {
    getUsers,
    getUser,
    abort
  };
const abortController = new AbortController();

function getUsers (){
    console.log(abortController.signal,'--abortController.signal1--')
    return axios.get(`https://randomuser.me/api/`, { signal: abortController.signal })
    .then (data => {
        return data;
    })
    .catch(error => {
        if (error.name === 'AbortError') return; 
        throw error; 
      });
}

function getUser (){
    console.log(abortController.signal,'--abortController.signal2--')
    return axios.get(`https://randomuser.me/api/`, { signal: abortController.signal })
    .then (data => {
        return data;
    })
    .catch(error => {
        if (error.name === 'AbortError') return; 
        throw error; 
      });
}

function abort(){
    return this.abortController.signal.abort()
}


  