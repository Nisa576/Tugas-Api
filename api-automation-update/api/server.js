const httpCaller = require('supertest');
const serverAPI = httpCaller('http://localhost:1234');


//Get 

function getUser(inputNama) {
    return serverAPI.get(`/v1/users?name=${inputNama}`)
        .set('Connection', 'keep-alive')
        .set('Content-type', 'application/json');
}

//GetById
function getById(inputId) {
    return serverAPI.get(`/v1/users/${inputId}`)
        .set('Connection', 'keep-alive')
        .set('Content-type', 'application/json');
}

// post
function postUser(bodyRequestData) {
    return serverAPI.post('/v1/users')
        .set('Connection', 'keep-alive')
        .set('Content-type', 'application/json')
        .send(bodyRequestData);
}

// put
function putUser(bodyRequestData) {
    return serverAPI.put(`/v1/users`)
        .set('Connection', 'keep-alive')
        .set('Content-type', 'application/json')
        .send(bodyRequestData);
}

// delete
function deleteById(inputId) {
    return serverAPI.delete(`/v1/users/${inputId}`)
        .set('Connection', 'keep-alive')
        .set('Content-type', 'application/json');
}

module.exports = {
    getUser,
    getById,
    postUser,
    putUser,
    deleteById

};


