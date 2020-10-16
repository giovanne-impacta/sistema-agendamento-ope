import {
    agendaService,
    clienteService,
    funcionarioService,
    servicosService, 
    produtosService,
    financesService,
    accountService } from '../services'
    
import { ServicosController } from './ServicosController'
import { ProdutosController } from './ProdutosController'
import { ClienteController } from './ClienteController'
import { FuncionarioController } from './FuncionarioController'
import { AgendaController } from './AgendaController'
import { FinancesController } from './FinancesController'
import { AccountController } from './AccountController'

const servicoControler = new ServicosController(servicosService)
const produtoControler = new ProdutosController(produtosService)
const clienteController = new ClienteController(clienteService)
const funcionarioController = new FuncionarioController(funcionarioService)
const agendaController = new AgendaController(agendaService)
const financesController = new FinancesController(financesService)
const accountController = new AccountController(accountService)


export { 
    servicoControler, 
    produtoControler, 
    clienteController, 
    funcionarioController, 
    agendaController,
    financesController,
    accountController }