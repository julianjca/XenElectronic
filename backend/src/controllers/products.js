const knex = require('../../knex')

module.exports = {
  async getAll (_, res ) {
    try {
      const products = await knex('products')
      res.status(200).json({
        products,
      })
    } catch {
      res.status(500).json({
        message: 'Failed getting product.'
      })
    }
  },
  async getById (req, res) {
    const id = req.params.id
    try {
      const product = await knex('products').where({ id })

      if (product.length === 0) {
        res.status(200).json({
          product: []
        })
        return
      }
      res.status(200).json({
        product: product[0]
      })
    } catch {
      res.status(500).json({
        message: 'Failed getting product.'
      })
    }
  },
  async create (req, res) {
    const { name, price } = req.body
    try {
      await knex('products').insert({ name, price })
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
    const { name, price } = req.body
    const { id } = req.params

    try {
      await knex('products').where({ id }).update({
        name, 
        price,
      })

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
      await knex('products').where({ id }).del()

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