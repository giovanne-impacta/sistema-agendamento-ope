import { 
    clienteRepository,
    funcionarioRepository,
    servicosRepository,
    produtosRepository } from '../repositories/implementations'
    
import { ServicosService } from './ServicosService'
import { ProdutosService } from './ProdutosService'
import { ClienteService } from './ClienteService'
import { FuncionarioService } from './FuncionarioService'



const servicosService = new ServicosService(servicosRepository)
const produtosService = new ProdutosService(produtosRepository)
const clienteService = new ClienteService(clienteRepository)
const funcionarioService = new FuncionarioService(funcionarioRepository)

export { servicosService, produtosService, clienteService, funcionarioService }