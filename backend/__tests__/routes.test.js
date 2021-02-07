const request = require('supertest')
const app = require('../app')

const models = require('../models')

const product = {
  productName: 'Product 1',
  productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
  price: 100,
  categoryId: '18bc6c31-e636-4f71-b1f8-52449dbe9950',
}

const category = {
  name: 'Category 1'
}

describe('Main API is working', () => {
  it('Should return API is ready', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body.text).toEqual('API ready')
  })
})

describe('Products Endpoints', () => {
  afterAll(async (done) => {
    await models.Product.destroy({ 
      where: { 
        id: '18bc6c31-e636-4f71-b1f8-52449dbe9951' 
      } 
    })

    await models.Category.destroy({ 
      where: { 
        id: '18bc6c31-e636-4f71-b1f8-52449dbe9954' 
      } 
    })
  
    await new Promise(resolve => setTimeout(() => resolve(), 500));
    done()
  });
  
  beforeAll(async () => {
    await models.Category.create({ 
      ...category, 
      id: '18bc6c31-e636-4f71-b1f8-52449dbe9954', 
      createdAt: new Date("2021-02-06T11:27:59.108Z"), 
      updatedAt: new Date() 
    })
    await models.Product.create({ 
      ...product, 
      id: '18bc6c31-e636-4f71-b1f8-52449dbe9951', 
      categoryId: '18bc6c31-e636-4f71-b1f8-52449dbe9954',
      createdAt: new Date("2021-02-06T11:27:59.108Z"), 
      updatedAt: new Date() 
    })
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
    expect(res.body.product.categoryId).toEqual('18bc6c31-e636-4f71-b1f8-52449dbe9954')
    expect(res.body.product.category.name).toEqual('Category 1')
  })

  it('should update product by id 18bc6c31-e636-4f71-b1f8-52449dbe9952', async () => {
    const res = await request(app).put('/products/18bc6c31-e636-4f71-b1f8-52449dbe9951').send({
      productName: 'test',
      price: 100,
      productImage: ''
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success updating product.',
    })
  })

  it('should deleting product by id 18bc6c31-e636-4f71-b1f8-52449dbe9952', async () => {
    await models.Product.create({ ...product, id: '18bc6c31-e636-4f71-b1f8-52449dbe9952', createdAt: new Date("2021-02-06T11:27:59.108Z"), updatedAt: new Date() })
    const res = await request(app).delete('/products/18bc6c31-e636-4f71-b1f8-52449dbe9952')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success deleting product.',
    })
  })
})

describe('Categories Endpoints', () => {
  beforeAll(async () => {
    await models.Category.create({ ...category, id: '18bc6c31-e636-4f71-b1f8-52449dbe9954', createdAt: new Date("2021-02-06T11:27:59.108Z"), updatedAt: new Date() })
  });

  afterAll(async (done) => {
    await models.Category.destroy({ where: { id: '18bc6c31-e636-4f71-b1f8-52449dbe9954' } })
  
    await new Promise(resolve => setTimeout(() => resolve(), 500));
    done()
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/categories')
      .send(product)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({ message: 'Success adding category.' })
  })

  it('should get all products', async () => {
    const res = await request(app).get('/categories')
    expect(res.statusCode).toEqual(200)
  })

  it('should get product by id 18bc6c31-e636-4f71-b1f8-52449dbe9954', async () => {
    const res = await request(app).get('/categories/18bc6c31-e636-4f71-b1f8-52449dbe9954')

    expect(res.statusCode).toEqual(200)
    expect(res.body.category.id).toEqual('18bc6c31-e636-4f71-b1f8-52449dbe9954')
    expect(res.body.category.name).toEqual('Category 1')

  })

  it('should update product by id 18bc6c31-e636-4f71-b1f8-52449dbe9954', async () => {
    const res = await request(app).put('/categories/18bc6c31-e636-4f71-b1f8-52449dbe9951').send({
      name: 'test',
    })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success updating category.',
    })
  })

  it('should deleting product by id 18bc6c31-e636-4f71-b1f8-52449dbe9955', async () => {
    await models.Category.create({ ...product, id: '18bc6c31-e636-4f71-b1f8-52449dbe9955', createdAt: new Date("2021-02-06T11:27:59.108Z"), updatedAt: new Date() })
    const res = await request(app).delete('/categories/18bc6c31-e636-4f71-b1f8-52449dbe9955')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({
      message: 'Success deleting category.',
    })
  })
})

