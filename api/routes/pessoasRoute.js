const PessoaController = require('../controller/PessoaController')
const express = require('express')
const router = express.Router()

router.route("/").get((PessoaController.exibePessoas))
router.route("/:id").get((PessoaController.exibeUmaPessoa))
router.route("/").post((PessoaController.criaPessoa))
router.route("/:id").put((PessoaController.atualizaPessoa))
router.route("/:id").delete((PessoaController.deletaPessoa))

module.exports = router