
const request = require('supertest');
const app = require('../src/api/index');

describe('API Endpoints', () => {
  it('should respond with a message at the root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });

  it('should handle assistant endpoint', async () => {
    const res = await request(app).get('/assistant');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('assistant');
  });

  it('should handle customization endpoint', async () => {
    const res = await request(app).get('/customization');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('customization');
  });

  it('should handle error for unknown endpoint', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toEqual(404);
  });
});
