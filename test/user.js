// During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

// Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../dist/index')
let should = chai.should()

chai.use(chaiHttp)
// Our parent block
describe('users', () => {
/*
   Test the /GET route
*/
describe('/POST user', () => {
    it('it should Post a msg', (done) => {
        let postdata ={
            "data": 
              {
                "type": "string",
                "id": "string",
                "attributes": {
                  "name": "abhinav"
                }
              }
          }
      chai.request('http://localhost:4000/api')
          .post('/post')
          .send(postdata)
          .end((err, res) => {
             // console.log(res)
              res.should.have.status(201);
              res.body.should.not.be.empty;
             // res.body.length.should.be.eql(2);
            done();
          });
    });
});
describe('/GET Msg', () => {
    it('it should GET the Hello Msg', (done) => {
      chai.request('http://localhost:4000/api')
          .get('/')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.not.be.empty;
            done();
          });
    });
});
describe('/Get hello/{slug}', () => {
    it('it should return hello/{slug}', (done) => {
      chai.request('http://localhost:4000/api')
          .get('/hello/testSlug')
          .end((err, res) => {
             // console.log(res)
              res.should.have.status(200);
              res.body.should.not.be.empty;
            done();
          });
    });
})
});