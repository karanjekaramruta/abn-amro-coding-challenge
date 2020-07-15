/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');

describe('Test the /data path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/data')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
