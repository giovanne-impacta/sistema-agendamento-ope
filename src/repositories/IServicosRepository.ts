import { Servicos } from "../domain/models/Servicos";

export interface IServicosRepository {
    getServices(): Promise<Servicos[]>;
    getServiceById(id: string): Promise<Servicos>;
    create(servico: Servicos): Promise<void>;
    update(servico: Servicos, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}