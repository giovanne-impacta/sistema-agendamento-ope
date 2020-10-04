import { IAgendaRepository } from '../repositories/IAgendaRepository'
import { IClienteRepository } from '../repositories/IClienteRepository'
import { IFuncionarioRepository } from '../repositories/IFuncionarioRepository'
import { FuncionarioRepository } from '../repositories/implementations/FuncionarioRepository'
import { ClienteRepository } from '../repositories/implementations/ClienteRepository'
import { ServicosRepository } from '../repositories/implementations/ServicosRepository'
import { ProdutosRepository } from '../repositories/implementations/ProdutosRepository'
import { ProductServiceRepository } from '../repositories/implementations/ProductServiceRepository'
import { ICreateAgendaRequestDTO } from '../domain/DTO/AgendaDTO';
import { Agenda } from '../domain/models/Agenda';
import { ProductService } from '../domain/models/ProductService'
import { ConvertDateTime } from '../utils/ConvertingTime'
import { IServicosRepository } from '../repositories/IServicosRepository'
import { IProdutosRepository } from '../repositories/IProdutosRepository'
import { IProductServiceRepository } from '../repositories/IProductServiceRepository'

export class AgendaService {
    private employeeRepository: IFuncionarioRepository
    private customerRepository: IClienteRepository
    private servicosRepository: IServicosRepository
    private productsRepository: IProdutosRepository
    private productServiceRepository: IProductServiceRepository
    constructor ( 
        private agendaRepository: IAgendaRepository
    ){
        this.employeeRepository = new FuncionarioRepository
        this.customerRepository = new ClienteRepository
        this.servicosRepository = new ServicosRepository
        this.productsRepository = new ProdutosRepository
        this.productServiceRepository = new ProductServiceRepository
    }

    async create(data: ICreateAgendaRequestDTO) {
        var customer = await this.customerRepository.getById(data.customerId!)
        var employee = await this.employeeRepository.getById(data.employeeId!)
        var service = await this.servicosRepository.getServiceById(data.serviceId!)
        var product = await this.productsRepository.getProdutosById(data.productId!)

        var date = new Date(parseInt(data.data)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        var newAgenda = new Agenda({customerId: customer.id, employeeId: employee.id, data: date})

        var id = await this.agendaRepository.create(newAgenda);

        var agendamento = new ProductService({idAgenda: id[0], idServicos: service.id, idProduto: product.id})
        await this.productServiceRepository.create(agendamento)

    }

    async getAll() {
        const agendas: Agenda[] = await this.agendaRepository.get()
        agendas.forEach(f => {
            f.data = ConvertDateTime(f.data)
        })
        return agendas
    }

    async getById(id: string) {
        const agenda: Agenda = await this.agendaRepository.getById(id)

        return agenda
    }

    async update(data: ICreateAgendaRequestDTO, id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');
        var newDate = new Date(parseInt(data.data)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        data.data = newDate

        await this.agendaRepository.update(data, id);
    }

    async delete(id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');

        await this.agendaRepository.delete(id);
    }
}
