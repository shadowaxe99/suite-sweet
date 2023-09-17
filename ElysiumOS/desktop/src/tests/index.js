
const { app } = require('../index');
const { expect } = require('chai');
const request = require('supertest');

describe('Desktop App', () => {
  it('should load the app', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).to.equal(200);
  });

  it('should load the assistant', async () => {
    const res = await request(app).get('/assistant');
    expect(res.statusCode).to.equal(200);
  });

  it('should load the customization', async () => {
    const res = await request(app).get('/customization');
    expect(res.statusCode).to.equal(200);
  });
});
