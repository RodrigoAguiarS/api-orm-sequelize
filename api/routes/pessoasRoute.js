const { Router} = require ('express')
const PessoaCrontroller = require('../controllers/PessoaController')


const router = Router()

router.get('/pessoas', PessoaCrontroller.pegaTodasAsPessoas)

router.get('/pessoas/:id', PessoaCrontroller.pegaUmaPessoa)

router.post('/pessoas', PessoaCrontroller.criaPessoas)

router.put('/pessoas/:id', PessoaCrontroller.atualizaPessoa)

router.delete('/pessoas/:id', PessoaCrontroller.apagaPessoa)

module.exports = router