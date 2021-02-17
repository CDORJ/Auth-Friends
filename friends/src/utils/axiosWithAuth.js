import React from 'react';
import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token,
        },
    });
}

export default axiosWithAuth;

/* 
    axiosWithAuth.post(baseURL, header)
    .then(token => {
        put token inside of our Local Storage
        -----We have a token in LocalStorage-----
        show them the token

        ---- When you go to log out ----
        give them back the token, the token is no longer in your LocalStorage
    })
    .catch(error message => {
        show that error message in the console
    })
*/
