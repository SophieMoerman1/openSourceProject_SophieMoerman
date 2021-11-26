const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app);


describe('GET /', function () {
    it('responds with json', function (done) {
        supertest(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /', function () {
    it('responds with json', function (done) {
        supertest(app)
            .post('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('PUT /', function () {
    it('responds with json', function (done) {
        supertest(app)
            .put('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('DELETE /', function () {
    it('responds with json', function (done) {
        supertest(app)
            .delete('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});