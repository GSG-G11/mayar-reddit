const request = require('supertest');
const app = require('../server/app');

describe('TEST FOR ROUTES IN APP ', () => {
  test('test home page route', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text/)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('test for page not found', (done) => {
    request(app)
      .get('/any')
      .expect(404)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
;
});
