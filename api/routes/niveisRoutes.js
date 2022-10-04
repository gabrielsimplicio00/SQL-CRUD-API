const NivelController = require('../controller/NivelController')
const express = require('express')
const router = express.Router()

router.route('/').get(NivelController.exibeNiveis)

module.exports = router