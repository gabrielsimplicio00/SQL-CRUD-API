const database = require('../models')

class PessoaController {
  static async exibePessoas(req, res) {
    try {
      const users = await database.Pessoas.findAll()
      res.json(users)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async exibeUmaPessoa(req, res) {
    const { id } = req.params
    try {
      const user = await database.Pessoas.findByPk(id)

      if(!user) return res.status(404).json("Usuário não encontrado")

      res.json(user)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async criaPessoa(req, res) {
    const { nome, ativo, email, role } = req.body
    try {
      const userCreated = await database.Pessoas.create({
        nome,
        ativo,
        email,
        role
      })
      res.status(201).json(userCreated)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params
    const { nome, ativo, email, role } = req.body
    try {
      await database.Pessoas.update({
        nome,
        ativo,
        email,
        role
      }, {
        where: { id }
      })
      const userUpdated = await database.Pessoas.findByPk(id)

      if(!userUpdated) return res.status(404).json("Usuário não encontrado")

      res.json(userUpdated)
    } catch (error) {
      res.json(error.message)
    }
  }

  static async deletaPessoa(req, res) {
    const { id } = req.params

    try {
      const user =await database.Pessoas.findByPk(id)
      if(user === null) return res.status(404).json("Usuário não encontrado")
      await database.Pessoas.destroy({ where: { id } })
      res.json({message: "Usuário deletado com sucesso"})
    } catch (error) {
      res.json(error.message)
    }
  }
}

module.exports = PessoaController