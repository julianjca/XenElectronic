const models = require('../../models')
const uuid = require('uuid')

module.exports = {
  async getAll (_, res ) {
    try {
      const categories = await models.Category.findAll()
      res.status(200).json({
        categories,
      })
    } catch {
      res.status(500).json({
        message: 'Failed getting categories.'
      })
    }
  },
  async getById (req, res) {
    const id = req.params.id
    try {
      const category = await models.Category.findAll({
        where: {
          id,
        }
      })

      if (category.length === 0) {
        res.status(200).json({
          category: []
        })
        return
      }
      res.status(200).json({
        category: category[0]
      })
    } catch {
      res.status(500).json({
        message: 'Failed getting category.'
      })
    }
  },
  async create (req, res) {
    const { name } = req.body
    try {
      await models.Category.create({ id: uuid.v4(), name, createdAt: new Date(), updatedAt: new Date() })
      res.status(200).json({
        message: 'Success adding category.'
      })
    } catch (e) {
      res.status(500).json({
        message: 'Failed creating category.'
      })
    }
  },
  async update (req, res) {
    const { name } = req.body
    const { id } = req.params

    try {
      await models.Category.update({ name, updatedAt: new Date() }, {where: {
        id,
      }})

      res.status(200).json({
        message: 'Success updating category.'
      })
    } catch (e) {
      res.status(500).json({
        message: 'Failed updating category.'
      })
    }
  },
  async remove (req, res) {
    const { id } = req.params

    try {
      await models.Category.destroy(
        {
          where: {
            id,
        }
      })

      res.status(200).json({
        message: 'Success deleting category.'
      })
    } catch (e) {
      res.status(500).json({
        message: 'Failed deleting category.'
      })
    }
  }
}