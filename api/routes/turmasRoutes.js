const TurmaController = require('../controller/TurmaController')
const express = require('express')
const router = express.Router()

router.route('/').get(TurmaController.exibeTurmas)

module.exports = router