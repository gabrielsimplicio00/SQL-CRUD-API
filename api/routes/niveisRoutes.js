const NivelController = require('../controller/NivelController')
const express = require('express')
const router = express.Router()

router.route('/').get(NivelController.exibeNiveis)
router.route('/:id').get(NivelController.exibeUmNivel)
router.route('/').post(NivelController.criaNivel)
router.route('/:id').put(NivelController.atualizaNivel)
router.route('/:id').delete(NivelController.deletaNivel)

module.exports = router