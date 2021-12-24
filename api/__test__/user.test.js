const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app);
const {
    response
} = require("../src/server.js");

it('tests if connection to endpoint is successful', async () => {
    jest.setTimeout(30000);
    const response = await request.get('/students');
    expect(response.statusCode).toEqual(200);
});

it('tests if connection to endpoint is successful', async () => {
    jest.setTimeout(30000);
    const response = await request.get('/students/:studentId');
    expect(response.statusCode).toEqual(200);
});


describe('POST /students', function () {
    it('responds with json', function (done) {
        jest.setTimeout(30000);
        request
            .post('/students')
            .send({
                firstname: 'Sophie'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});


describe('PUT /students', function () {
    it('responds with json', function (done) {
        supertest(app)
            .put('/students')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(404, done);
    });
});

describe('DELETE/studentId', function () {
    it('responds with json', function (done) {
        request
            .delete('/students/61c50c9f409ac4197b823061')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});