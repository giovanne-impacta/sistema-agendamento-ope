import { ServicosRepository } from './ServicosRepository'
import { ProdutosRepository } from './ProdutosRepository'
import { ClienteRepository } from './ClienteRepository'
import { FuncionarioRepository } from './FuncionarioRepository'

const servicosRepository = new ServicosRepository()

const produtosRepository = new ProdutosRepository()

const clienteRepository = new ClienteRepository()

const funcionarioRepository = new FuncionarioRepository()


export { servicosRepository, produtosRepository, clienteRepository, funcionarioRepository }