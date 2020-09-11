import { 
    servicosService, 
    produtosService } from '../services'
    
import { ServicosController } from './ServicosController'
import { ProdutosController } from './ProdutosController'


const servicoControler = new ServicosController(servicosService)

const produtoControler = new ProdutosController(produtosService)


export { servicoControler, produtoControler }