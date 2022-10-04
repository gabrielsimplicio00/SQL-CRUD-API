const database = require('../models')

class NivelController {
  static async exibeNiveis(req, res) {
    try {
      const niveis = await database.Niveis.findAll()
      res.json(niveis)
    } catch (error) {
      console.log(error.message)
    }
  }

  static async exibeUmNivel(req, res) {
    const { id } = req.params
    try {
      const niveis = await database.Niveis.findByPk(id)
      res.json(niveis)
    } catch (error) {
      console.log(error.message)
    }
  }

  static async criaNivel(req, res) {
    const { descr_nivel } = req.body
    try {
      const nivelCreated = await database.Niveis.create({
        descr_nivel
      })
      res.json(nivelCreated)
    } catch (error) {
      console.log(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const { descr_nivel } = req.body
    try {
      await database.Pessoas.update({
        descr_nivel
      }, {
        where: { id }
      })
      const nivelUpdated = await database.Niveis.findByPk(id)
      res.json(nivelUpdated)
    } catch (error) {
      console.log(error.message)
    }
  }

  static async deletaNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: { id } })
      res.json({message: "Nível deletado com sucesso"})
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = NivelController