const app = require('./api/app')
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})