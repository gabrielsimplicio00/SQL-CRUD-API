const express = require('express')
const pessoasRoutes = require('./pessoasRoute')
const turmasRoutes = require('./turmasRoutes')
const niveisRoutes = require('./niveisRoutes')

const router = express.Router()

router.use("/pessoas", pessoasRoutes)
router.use("/turmas", turmasRoutes)
router.use("/niveis", niveisRoutes)

module.exports = router