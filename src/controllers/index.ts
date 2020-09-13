import {
    agendaService,
    clienteService,
    funcionarioService,
    servicosService, 
    produtosService } from '../services'
    
import { ServicosController } from './ServicosController'
import { ProdutosController } from './ProdutosController'
import { ClienteController } from './ClienteController'
import { FuncionarioController } from './FuncionarioController'
import { AgendaController } from './AgendaController'

const servicoControler = new ServicosController(servicosService)
const produtoControler = new ProdutosController(produtosService)
const clienteController = new ClienteController(clienteService)
const funcionarioController = new FuncionarioController(funcionarioService)
const agendaController = new AgendaController(agendaService)


export { servicoControler, produtoControler, clienteController, funcionarioController, agendaController }