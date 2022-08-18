const chai = require('chai');
const expect = chai.expect;
const api = require(process.cwd() + '/api/server');
const scenario = require(process.cwd() + '/scenarios/put-user');
const requestBody = require(process.cwd() + '/data/create-user.json');
const jsonSchema = require(process.cwd() + '/schemas/schema-get.json');
const testdata = require(process.cwd() + '/testdata/testdata');

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

        let requestBody = testdata.dataRequest(ID);
        let response = await api.putUser(requestBody);
        expect(response.status).to.equal(200);
        // console.log(response.body)
        expect(response.body.occupation).to.equal(requestBody.occupation);
        expect(response.body.nasionality).to.equal(requestBody.nasionality);
        // console.log(response.body)
        expect(response.body).has.jsonSchema(jsonSchema);

    });

    it(scenario.testcase.negative.case1, async () => {

        let requestBody = testdata.dataRequest(ID);
        requestBody.age = 0;
        // console.log(requestBody)
        let response = await api.putUser(requestBody);
        expect(response.status).to.equal(400);
        expect(response.body.errorCode).to.equal("ER-03");
        expect(response.body.message).to.equal("you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender");
        // console.log(response.body)

    });

    it(scenario.testcase.negative.case2, async () => {

        let requestBody = testdata.dataRequest(ID);
        requestBody.hobbies = [];
        // console.log(requestBody)
        let response = await api.putUser(requestBody);
        // console.log(response.body)
        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal("you must specify data for firstname, lastName, age, occupation, nationality, hobbies (at least 1), and gender");
        expect(response.body.errorCode).to.equal("ER-03");

    });

    it(scenario.testcase.negative.case3, async () => {

        let requestBody = testdata.dataRequest(ID);
        requestBody.id = null;
        // console.log(requestBody)
        let response = await api.putUser(requestBody);
        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal("user not found");
        expect(response.body.errorCode).to.equal("ER-01");
        // console.log(response.body);
    })

    after(async () => {
        console.log("After : Delete User");
        let response = await api.deleteById(ID);
        expect(response.status).to.equal(200);
    })

});



