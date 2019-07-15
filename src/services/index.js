import axios from 'axios';
export const indexServices = {
    getUsers
  };

function getUsers (data){
    return axios.get(`https://randomuser.me/api/`, data)
    .then (data => {
        return data;
    })
    
}


  