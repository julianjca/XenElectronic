const uuid = require('uuid')
const models = require('../../models/index')

module.exports = {
  async getAll (req, res ) {
    console.log(req.query.categoryId)
    let options 

    if(req.query.categoryId) {
      options = {
        include: {
          model: models.Category,
          as: 'category',
          attributes:['name']
        },
        where: {
          categoryId: req.query.categoryId,
        }
      }
    } else {
      options = {
        include: {
          model: models.Category,
          as: 'category',
          attributes:['name']
        },
      }
    }
    try {
      const products = await models.Product.findAll(options)
      res.status(200).json({
        products,
      })
    } catch(e) {
      console.log(e)
      res.status(500).json({
        message: 'Failed getting product.'
      })
    }
  },
  async getById (req, res) {
    const id = req.params.id
    try {
      const product = await models.Product.findAll({
        where: {
          id,
        },
        include: {
          model: models.Category,
          as: 'category',
          attributes:['name']
        },
      })

      if (product.length === 0) {
        res.status(200).json({
          product: []
        })
        return
      }
      res.status(200).json({
        product: product[0]
      })
    } catch(e) {
      res.status(500).json({
        message: 'Failed getting product.'
      })
    }
  },
  async create (req, res) {
    const { productName, price, productImage } = req.body
    try {
      await models.Product.create({ id: uuid.v4(), productName, productImage, price, createdAt: new Date(), updatedAt: new Date() })
      res.status(200).json({
        message: 'Success adding product.'
      })
    } catch (e) {
      res.status(500).json({
        message: 'Failed creating product.'
      })
    }
  },
  async update (req, res) {
    const { productName, price, productImage } = req.body
    const { id } = req.params

    try {
      await models.Product.update({ productName, price, productImage, updatedAt: new Date() }, 
      {
        where: {
          id,
        }
      })

      res.status(200).json({
        message: 'Success updating product.'
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        message: 'Failed updating product.'
      })
    }
  },
  async remove (req, res) {
    const { id } = req.params

    try {
      await models.Product.destroy(
        {
          where: {
            id,
        }
      })

      res.status(200).json({
        message: 'Success deleting product.'
      })
    } catch (e) {
      res.status(500).json({
        message: 'Failed deleting product.'
      })
    }
  }
}