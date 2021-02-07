const models = require('../models')

const { getAll, getById, create, update, remove } = require('../src/controllers/categories')

const categories = [
  {
    "id": "080115fd-fb6b-436a-8efe-0a8f405ff2ae",
    "name": "Category 3",
    "createdAt": "2021-02-06T17:51:32.008Z",
    "updatedAt": "2021-02-06T17:51:32.008Z"
  },
]

describe('Categories controller', () => {
  it('should retrieve one member by id and send response correctly', async () => {
    const mock = jest.spyOn(models.Category, 'findAll').mockResolvedValueOnce(categories);
    const mReq = { query: { categoryId: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getAll(mReq, mRes);

    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.json).toBeCalledWith({ categories});

    mock.mockRestore()
  });
  
  it('should fail getting category when there is an error from database', async () => {
    const mock = jest.spyOn(models.Category, 'findAll').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { name: 'name' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getAll(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed getting categories.'
    });

    mock.mockRestore()
  });

  it('should return empty array when there is no data from DB', async () => {
    const mock = jest.spyOn(models.Category, 'findAll').mockResolvedValueOnce([]);
    const mReq = { params: { id: '1' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getById(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(200);
    expect(mRes.json).toBeCalledWith({
      category: [],
    });

    mock.mockRestore()
  });

  it('should fail getting category by id when there is an error from database', async () => {
    const mock = jest.spyOn(models.Category, 'create').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { name: 'name' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getById(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed getting category.'
    });

    mock.mockRestore()
  });


  it('should fail to create a category when there is an error from database', async () => {
    const mock = jest.spyOn(models.Category, 'create').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { name: 'name' } };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await create(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed creating category.'
    });

    mock.mockRestore()
  });

  it('should fail to update a category when there is an error from database', async () => {
    const mock = jest.spyOn(models.Category, 'update').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { name: 'name' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await update(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed updating category.'
    });

    mock.mockRestore()
  });

  it('should fail to delete a category when there is an error from database', async () => {
    const mock = jest.spyOn(models.Category, 'destroy').mockImplementationOnce(() => Promise.reject());
    const mReq = { body: { name: 'name' }, params: { id: '1'} };
    const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await remove(mReq, mRes);
    
    expect(mRes.status).toBeCalledWith(500);
    expect(mRes.json).toBeCalledWith({
      message: 'Failed deleting category.'
    });

    mock.mockRestore()
  });
})

