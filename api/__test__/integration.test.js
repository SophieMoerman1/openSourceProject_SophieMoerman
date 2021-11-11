const {
    it
} = require('@jest/globals');

const request = require('supertest');
const app = require('../src/index');

describe("First Test", function () {
    it('server is live', () => request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200)
    );

});