const { Router} = require ('express')
const { pegaTodasAsPessoas } = require('../controllers/PessoaController')
const PessoaCrontroller = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaCrontroller.pegaTodasAsPessoas)

module.exports = router