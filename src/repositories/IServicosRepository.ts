import { Servico } from "../domain/models/Servico";

export interface IServicosRepository {
    getServices(): Promise<Servico[]>;
    getServiceById(id: string): Promise<Servico>;
    create(servico: Servico): Promise<void>;
    update(servico: Servico, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}