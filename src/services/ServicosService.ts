import { IServicosRepository } from '../repositories/IServicosRepository'
import { ICreateServicoRequestDTO } from '../domain/DTO/ServicosDTO';
import { Servico } from '../domain/models/Servico';

export class ServicosService {
    
    constructor ( 
        private servicosRepository: IServicosRepository
        ){}

    async createService(serviceData: ICreateServicoRequestDTO) {

        const servico = new Servico(serviceData);

        await this.servicosRepository.create(servico);
    }

    async getAllServices() {
        const servicos: Servico[] = await this.servicosRepository.getServices()

        return servicos
    }

    async getServiceById(id: string) {
        const servico: Servico = await this.servicosRepository.getServiceById(id)

        return servico
    }

    async updateService(serviceData: ICreateServicoRequestDTO, id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getServiceById(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        const servico = new Servico(serviceData);

        await this.servicosRepository.update(servico, id);
    }

    async deleteService(id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getServiceById(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        await this.servicosRepository.delete(id);
    }
}
