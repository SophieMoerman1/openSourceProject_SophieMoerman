const app = require('../src/index.js');
const supertest = require('supertest');
const request = supertest(app);


it("Gets the test endpoint", async () => {
    jest.setTimeout(30000);

    const res = await request.get('/owner');
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Sophie');

});