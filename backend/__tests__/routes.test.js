const request = require('supertest')
const app = require('../app')
const knex = require('../knex')

// https://github.com/knex/knex/issues/2686

afterAll(async (done) => {
	await new Promise(resolve => setTimeout(() => resolve(), 500));
  await knex.destroy()

  done()
});

describe('Products Endpoints', () => {
  beforeEach((done) => knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run())
  .then(() => done())
);

  afterEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      done();
    });
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'test',
        price: 100,
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ message: 'Success adding product.' })
  })

  it('should get all products', async () => {
    const res = await request(app).get('/products')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual( {
      products: [
        { id: 1, name: 'Product 1', price: '100.00' },
        { id: 2, name: 'Product 2', price: '50.00' },
        { id: 3, name: 'Product 3', price: '20.00' }
      ]
    })
  })

  it('should get product by id 1', async () => {
    const res = await request(app).get('/products/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      "product": {
        "id": 4,
        "name": "Product 1",
        "price": "100.00",
        "category_id": 1,
        "category_name": "Category 1"
      }
    })
  })

  it('should update product by id 1', async () => {
    const res = await request(app).put('/products/1').send({
      name: 'test',
      price: 100,
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success updating product.',
    })
  })

  it('should deleting product by id 1', async () => {
    const res = await request(app).delete('/products/1')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success deleting product.',
    })
  })
})

describe('Categories Endpoints', () => {
  beforeEach((done) => knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run())
  .then(() => done())
);

  afterEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      done();
    });
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'test',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ message: 'Success adding category.' })
  })

  it('should get all products', async () => {
    const res = await request(app).get('/products')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual( {
      products: [
        { id: 1, name: 'Category 1'},
        { id: 2, name: 'Product 2'},
        { id: 3, name: 'Product 3'}
      ]
    })
  })

  it('should get product by id 1', async () => {
    const res = await request(app).get('/products/1')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      product: { id: 1, name: 'Product 1', price: '100.00' },
    })
  })

  it('should update product by id 1', async () => {
    const res = await request(app).put('/products/1').send({
      name: 'test',
      price: 100,
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success updating product.',
    })
  })

  it('should deleting product by id 1', async () => {
    const res = await request(app).delete('/products/1')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success deleting product.',
    })
  })
})