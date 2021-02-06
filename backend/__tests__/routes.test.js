const request = require('supertest')
const app = require('../app')

const models = require('../models')

// https://github.com/knex/knex/issues/2686

const product = {
  productName: 'Product 1',
  productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
  price: 100,
  categoryId: '18bc6c31-e636-4f71-b1f8-52449dbe9950',
}

afterAll(async (done) => {
  await models.Product.destroy({ where: { id: '18bc6c31-e636-4f71-b1f8-52449dbe9951' } })

	await new Promise(resolve => setTimeout(() => resolve(), 500));
  done()
});

describe('Products Endpoints', () => {
  beforeAll(async () => {
    await models.Product.create({ ...product, id: '18bc6c31-e636-4f71-b1f8-52449dbe9951', createdAt: new Date("2021-02-06T11:27:59.108Z"), updatedAt: new Date() })
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send(product)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ message: 'Success adding product.' })
  })

  it('should get all products', async () => {
    const res = await request(app).get('/products')
    expect(res.statusCode).toEqual(200)
  })

  it('should get product by id 18bc6c31-e636-4f71-b1f8-52449dbe9951', async () => {
    const res = await request(app).get('/products/18bc6c31-e636-4f71-b1f8-52449dbe9951')

    expect(res.statusCode).toEqual(200)
    expect(res.body.product.id).toEqual('18bc6c31-e636-4f71-b1f8-52449dbe9951')
    expect(res.body.product.productName).toEqual('Product 1')
    expect(res.body.product.productImage).toEqual('https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg')
    expect(res.body.product.price).toEqual(100)
    expect(res.body.product.categoryId).toEqual('18bc6c31-e636-4f71-b1f8-52449dbe9950')

  })

  it('should update product by id 1', async () => {
    const res = await request(app).put('/products/18bc6c31-e636-4f71-b1f8-52449dbe9951').send({
      productName: 'test',
      price: 100,
      productName: '',
      productImage: ''
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success updating product.',
    })
  })

  it('should deleting product by id 1', async () => {
    await models.Product.create({ ...product, id: '18bc6c31-e636-4f71-b1f8-52449dbe9952', createdAt: new Date("2021-02-06T11:27:59.108Z"), updatedAt: new Date() })
    const res = await request(app).delete('/products/18bc6c31-e636-4f71-b1f8-52449dbe9952')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success deleting product.',
    })
  })
})

