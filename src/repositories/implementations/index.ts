import { ServicosRepository } from './ServicosRepository'
import { ProdutosRepository } from './ProdutosRepository'
import { ClienteRepository } from './ClienteRepository'
import { FuncionarioRepository } from './FuncionarioRepository'
import { AgendaRepository } from './AgendaRepository'

const servicosRepository = new ServicosRepository()
const produtosRepository = new ProdutosRepository()
const clienteRepository = new ClienteRepository()
const funcionarioRepository = new FuncionarioRepository()
const agendaRepository = new AgendaRepository()

export 
    { 
        servicosRepository, 
        produtosRepository, 
        clienteRepository, 
        funcionarioRepository,
        agendaRepository
    }