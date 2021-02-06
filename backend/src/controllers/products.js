const uuid = require('uuid')
const models = require('../../models/index')

module.exports = {
  async getAll (_, res ) {
    try {
      const products = await models.Product.findAll()
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
    console.log(id)
    try {
      const product = await models.Product.findAll({
        where: {
          id,
        }
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
      console.log(e)
      res.status(500).json({
        message: 'Failed getting product.'
      })
    }
  },
  async create (req, res) {
    const { productName, price } = req.body
    try {
      await models.Product.create({ id: uuid.v4(), productName, price, createdAt: new Date(), updatedAt: new Date() })
      res.status(200).json({
        message: 'Success adding product.'
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        message: 'Failed creating product.'
      })
    }
  },
  async update (req, res) {
    const { productName, price } = req.body
    const { id } = req.params

    try {
      await models.Product.update({where: {
        id,
      }},{ productName, price, updatedAt: new Date() })

      res.status(200).json({
        message: 'Success updating product.'
      })
    } catch (e) {
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