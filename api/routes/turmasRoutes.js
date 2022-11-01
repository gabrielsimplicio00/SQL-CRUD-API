const TurmaController = require('../controller/TurmaController')
const express = require('express')
const router = express.Router()

router.route('/').get(TurmaController.exibeTurmas)
router.route("/:id").get((TurmaController.exibeUmaTurma))
router.route("/").post((TurmaController.criaTurma))
router.route("/:id").put((TurmaController.atualizaTurma))
router.route("/:id").delete((TurmaController.deletaTurma))

module.exports = router