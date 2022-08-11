const httpCaller = require('supertest');
const serverAPI = httpCaller('http://localhost:1234');

function getUser(inputNama) {
    // cara manggil data
    // return serverAPI.get('/v1/users?name=Nisa') //Manual
    // return serverAPI.get('/v1/users?name=' + inputNama) //Petik '
    return serverAPI.get(`/v1/users?name=${inputNama}`) // Petik `
    .set('Connection','keep-alive')
    .set('Connection-type', 'application/json');
}

function getUserById(inputId) {
    return serverAPI.get(`/v1/users/${inputId}`)
    .set('Connection','keep-alive')
    .set('Connection-type', 'application/json');
}

function postUser(bodyRequestData) {
    return serverAPI.post('/v1/users')
    .set('Connection','keep-alive')
    .set('Connection-type', 'application/json')
    .send(bodyRequestData);
}

function putUser(bodyRequestData) {
    return serverAPI.put('/v1/users')
    .set('Connection','keep-alive')
    .set('Connection-type', 'application/json')
    .send(bodyRequestData);
}



module.exports = {
    getUser,
    getUserById,
    postUser,
    putUser
};