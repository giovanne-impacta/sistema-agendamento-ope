import {
    clienteService,
    funcionarioService,
    servicosService, 
    produtosService } from '../services'
    
import { ServicosController } from './ServicosController'
import { ProdutosController } from './ProdutosController'
import { ClienteController } from './ClienteController'
import { FuncionarioController } from './FuncionarioController'

const servicoControler = new ServicosController(servicosService)
const produtoControler = new ProdutosController(produtosService)
const clienteController = new ClienteController(clienteService)
const funcionarioController = new FuncionarioController(funcionarioService)


export { servicoControler, produtoControler, clienteController, funcionarioController }