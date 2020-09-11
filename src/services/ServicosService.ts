import { IServicosRepository } from '../repositories/IServicosRepository'
import { ICreateServicoRequestDTO } from '../domain/DTO/ServicosDTO';
import { Servicos } from '../domain/models/Servicos';

export class ServicosService {
    
    constructor ( 
        private servicosRepository: IServicosRepository
        ){}

    async createService(serviceData: ICreateServicoRequestDTO) {

        const servico = new Servicos(serviceData);

        await this.servicosRepository.create(servico);
    }

    async getAllServices() {
        const servicos: Servicos[] = await this.servicosRepository.getServices()

        return servicos
    }

    async getServiceById(id: string) {
        const servico: Servicos = await this.servicosRepository.getServiceById(id)

        return servico
    }

    async updateService(serviceData: ICreateServicoRequestDTO, id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getServiceById(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        const servico = new Servicos(serviceData);

        await this.servicosRepository.update(servico, id);
    }

    async deleteService(id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getServiceById(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        await this.servicosRepository.delete(id);
    }
}
