const database = require('../models')

class TurmaController {
  static async exibeTurmas(req, res) {
    try {
      const turmas = await database.Turmas.findAll()
      res.json(turmas)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async exibeUmaTurma(req, res) {
    const { id } = req.params
    try {
      const turma = await database.Turmas.findByPk(id)

      if(!turma) return res.status(404).send("Turma não encontrada")

      res.json(turma)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async criaTurma(req, res) {
    const { data_inicio, docente_id, nivel_id } = req.body
    try {
      const turmaCreated = await database.Turmas.create({
        data_inicio,
        docente_id,
        nivel_id
      })
      res.status(201).json(turmaCreated)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const { data_inicio, docente_id, nivel_id } = req.body
    try {
      await database.Turmas.update({
        data_inicio,
        docente_id,
        nivel_id
      }, {
        where: { id }
      })
      const turmaUpdated = await database.Turmas.findByPk(id)

      if(!turmaUpdated) return res.status(404).send("Turma não encontrada")

      res.json(turmaUpdated)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async deletaTurma(req, res) {
    const { id } = req.params

    try {
      const turma =await database.Turmas.findByPk(id)
      if(turma === null) return res.status(404).json("Turma não encontrada")
      await database.Turmas.destroy({ where: { id } })
      res.json({message: "Turma deletada com sucesso"})
    } catch (error) {
      res.json(error.message)
    }
  }
}

module.exports = TurmaController