const request = require('supertest');
const app = require('./app');

describe('app', () => {
  test('GET - /hello: status 200', () => {
    return request(app)
      .get('/hello')
      .expect(200)
      .then(({ body: { msg } }) => {
        expect(msg).toBe('hello!!!');
      });
  });
});
