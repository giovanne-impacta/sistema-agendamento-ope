import { 
    servicosRepository,
    produtosRepository
     } from '../repositories/implementations'
    
import { ServicosService } from './ServicosService'

import { ProdutosService } from './ProdutosService'



const servicosService = new ServicosService(servicosRepository)

const produtosService = new ProdutosService(produtosRepository)


export { servicosService, produtosService }