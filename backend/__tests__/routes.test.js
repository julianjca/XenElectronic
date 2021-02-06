const request = require('supertest')
const app = require('../app')

// https://github.com/knex/knex/issues/2686

afterAll(async (done) => {
	await new Promise(resolve => setTimeout(() => resolve(), 500));
  done()
});

describe('Products Endpoints', () => {
  // it('should create a new product', async () => {
  //   const res = await request(app)
  //     .post('/products')
  //     .send({
  //       name: 'test',
  //       price: 100,
  //     })
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toEqual({ message: 'Success adding product.' })
  // })

  it('should get all products', async () => {
    const res = await request(app).get('/products')
    expect(res.statusCode).toEqual(200)
  })

  // it('should get product by id 1', async () => {
  //   const res = await request(app).get('/products/1')
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toEqual({
  //     "product": {
  //       "id": 4,
  //       "name": "Product 1",
  //       "price": "100.00",
  //       "category_id": 1,
  //       "category_name": "Category 1"
  //     }
  //   })
  // })

  // it('should update product by id 1', async () => {
  //   const res = await request(app).put('/products/1').send({
  //     name: 'test',
  //     price: 100,
  //   })
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toEqual({
  //     message: 'Success updating product.',
  //   })
  // })

  // it('should deleting product by id 1', async () => {
  //   const res = await request(app).delete('/products/1')
    
  //   expect(res.statusCode).toEqual(200)
  //   expect(res.body).toEqual({
  //     message: 'Success deleting product.',
  //   })
  // })
})

