const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app);


it("Test GET endpoint", async () => {
    jest.setTimeout(30000);

    const res = await request.get('/owner');
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Sophie');

});

it("Test POST endpoint", async () => {
    jest.setTimeout(30000);

    const res = await request.post('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('the text has been posted');

});

it("Test PUT endpoint", async () => {
    jest.setTimeout(30000);

    const res = await request.put('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('The text has been updated');

});

it("Test DELETE endpoint", async () => {
    jest.setTimeout(30000);

    const res = await request.delete('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('deleting complete');

});