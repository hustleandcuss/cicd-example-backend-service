const request = require('supertest')
const app = require('../../index')

describe('BaseRouter', () => {
  it('should return 200 OK on /healthcheck', async () => {
    // ARRANGE

    // ACT
    const res = await request(app)
      .get('/healthcheck')
      .send()

    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.status).toBe('OK')
  })

  it('should return courses', async () => {
    // ARRANGE

    // ACT
    const res = await request(app)
      .get('/courses')
      .send()

    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe('application/json')
    expect(res.body.length).toBe(8)
    expect(res.body[0].id).toBe(1)
    expect(res.body[0].title).toBe('Frontend Development - JS and React')
    expect(res.body[7].id).toBe(8)
    expect(res.body[7].title).toBe('Cloud Services - AWS')
  })

  it('should return students', async () => {
    // ARRANGE

    // ACT
    const res = await request(app)
      .get('/students')
      .send()

    // ASSERT
    expect(res.statusCode).toBe(501)

    // TODO Enable when ready
    //        expect(res.statusCode).toBe(200);
    //        expect(res.type).toBe('application/json');
    //        expect(res.body.length).toBe(3);
    //        expect(res.body[0].id).toBe(1);
    //        expect(res.body[0].name).toBe('Jane Doe');
    //        expect(res.body[2].id).toBe(3);
    //        expect(res.body[2].name).toBe('John Doe');
  })
})
