const chai = require('chai');
const expect = require('chai').expect;
const api = require(process.cwd() + '/api/server');
const kirimdata = require(process.cwd() + '/data/kirimdata');
const scenario = require(process.cwd() + '/scenario/create-user');
const data = require(process.cwd() + '/data/create-user.json');
const jsonschema = require(process.cwd() + '/schemas/search-user-schema');
const jsonschema2 = require(process.cwd() + '/schemas/post-schema');


//urutan matters
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(require('chai-json-schema'));

//MOCHA FRAMEWORK TEST  
describe(scenario.testcase.description, async function () {
    before(async () =>{
        console.log("Before Modul");
        
    })
    after(async () =>{
        console.log("After Modul");
    })

    beforeEach(async () =>{
        console.log("Before Tes");
    })
    afterEach(async () =>{
        console.log("After Tes");
    })
    
    it(scenario.testcase.positive.case1, async function () {
        
        let nama = 'nadira';
        let response = await api.getUser(nama);
        let body = response.body;
        expect(response.status).to.equal(200);
        expect(response.body).has.jsonSchema(jsonschema);
    });

    it(scenario.testcase.positive.case2, async function () {


        let requestBody = kirimdata.kirimpost;
        let response = await api.postUser(requestBody);
        let body = response.body;

        let nama = kirimdata.kirimpost.firstName;
        expect(response.status).to.equal(200);
        expect(body.firstName).to.equal(nama);
        
        expect(response.body).has.jsonSchema(jsonschema2);
       
    });

    it(scenario.testcase.positive.case3, async function () {
        let nama = "40f6822d-c225-4ea8-903c-01dba8f39578"
        let requestBody = kirimdata.kirimput1;
        let response = await api.putUser(requestBody);
        let body = response.body;

        let kerja = kirimdata.kirimput1.occupation;
        let negara = kirimdata.kirimput1.nationality;
        expect(response.status).to.equal(200);
        expect(body.occupation).to.equal(kerja);
        expect(body.nationality).to.equal(negara);
        // console.log(response.body)
        expect(response.body).has.jsonSchema(jsonschema2);
       
    });

    it(scenario.testcase.negative.case1, async function () {
        let requestBody = kirimdata.kirimput2;
        let response = await api.putUser(requestBody);
        let body = response.body;
        expect(response.status).to.equal(400);
    });

    it(scenario.testcase.negative.case2, async function () {
        
        let requestBody = kirimdata.kirimput3;
        let response = await api.putUser(requestBody);
        let body = response.body;
        expect(response.status).to.equal(400);
        
       
    });

    it(scenario.testcase.negative.case3, async function () {
        let requestBody = kirimdata.kirimput4;
        let response = await api.putUser(requestBody);
        let body = response.body;
        expect(response.status).to.equal(404);
       
        
       
    });

    it(scenario.testcase.positive.case4, async function () {
       
        let nama = '40f6822d-c225-4ea8-903c-01dba8f39578';
        let response = await api.getUser(nama);
        let body = response.body;
        expect(response.status).to.equal(200);
        expect(response.body).has.jsonSchema(jsonschema);
    });

    it(scenario.testcase.negative.case4, async function () {
       
        let id = '123';
        let response = await api.getUserById(id);
        let body = response.body;
        expect(response.status).to.equal(404);
      
    });

        
    });




