const models = require('../models')

const { getAll, getById, create, update, remove } = require('../src/controllers/products')

const products = [
  {
    "id": "63a21465-cfd4-47d3-b45b-d3399c079607",
    "productName": "Product 1",
    "price": 100,
    "productImage": "https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg",
    "categoryId": null,
    "createdAt": "2021-02-07T04:22:40.755Z",
    "updatedAt": "2021-02-07T04:22:40.755Z",
    "category": null
  }
]

describe('Categories controller', () => {
  it('should retrieve one member by id and send response correctly', async () => {
    const mock = jest.spyOn(models.Product, 'findAll').mockResolvedValueOnce(products);
    const mReq = { query: { categoryId: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getAll(mReq, mRes);
    expect(mock).toHaveBeenCalledWith({"include": {"as": "category", "attributes": ["name"], "model": models.Category}, "where": {"categoryId": "1"}});
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.json).toBeCalledWith({ products});

    mock.mockRestore()
  });

  it('should fail when there is an error from database', async () => {
    const mock = jest.spyOn(models.Product, 'findAll').mockImplementationOnce(() => Promise.reject());
    const mReq = { query: { categoryId: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getAll(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed getting product.'
    });

    mock.mockRestore()
  });

  it('should return empty array when there is no data from DB', async () => {
    const mock = jest.spyOn(models.Product, 'findAll').mockResolvedValueOnce([]);
    const mReq = { params: { id: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getById(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.json).toBeCalledWith({
      product: [],
    });

    mock.mockRestore()
  });

  it('should fail getting product by id when there is an error from database', async () => {
    const mock = jest.spyOn(models.Product, 'create').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { productName: 'name', price: 200, productImage: 'image' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getById(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed getting product.'
    });

    mock.mockRestore()
  });


  it('should fail to create a product when there is an error from database', async () => {
    const mock = jest.spyOn(models.Product, 'create').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { productName: 'name', price: 200, productImage: 'image' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await create(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed creating product.'
    });

    mock.mockRestore()
  });

  it('should fail to update a product when there is an error from database', async () => {
    const mock = jest.spyOn(models.Product, 'update').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { productName: 'name', price: 200, productImage: 'image' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await update(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed updating product.'
    });

    mock.mockRestore()
  });

  it('should fail to delete a product when there is an error from database', async () => {
    const mock = jest.spyOn(models.Product, 'destroy').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { productName: 'name', price: 200, productImage: 'image' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await remove(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed deleting product.'
    });

    mock.mockRestore()
  });
})

