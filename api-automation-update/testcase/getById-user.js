const chai = require('chai');
const expect = chai.expect;
const api = require(process.cwd() + '/api/server');
const scenario= require(process.cwd() + '/scenarios/getById-user');
const requestBody = require(process.cwd() + '/data/create-user.json');
const jsonSchema = require(process.cwd() + '/schemas/schema-get.json');

//urutan matters
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

let ID;

describe(scenario.testcase.description, async () => {
    before(async () => {
        console.log("Before : Create User");
        let response = await api.postUser(requestBody);
        expect(response.status).to.equal(200);

        // Get ID
        response = await api.getUser(requestBody.firstName);
        bodyData = response.body;
        expect(response.status).to.equal(200);
        ID = bodyData.data[0].id;
        // console.log(ID);
    })

    it(scenario.testcase.positive.case1, async () => {
        let keyword = ID;
        let response = await api.getById(keyword);
        expect(response.status).to.equal(200);
        // console.log(response.body)
        expect(response.body.id).to.equal(keyword);
        expect(response.body).has.jsonSchema(jsonSchema);
    });

    it(scenario.testcase.negative.case1, async () => {
        let keyword = 0;
        let response = await api.getById(keyword);
        expect(response.status).to.equal(404);
        // console.log(response.body)
        expect(response.body.message).to.equal("user not found");
        expect(response.body.errorCode).to.equal("ER-01");
    });

    after(async () => {
        console.log("After : Delete User");
        let response = await api.deleteById(ID);
        expect(response.status).to.equal(200);
    })

});