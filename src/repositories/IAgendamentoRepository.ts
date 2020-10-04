import { Agendamento } from "../domain/models/Agendamento";
import { ICreateAgendamentoRequestDTO } from '../domain/DTO/AgendamentoDTO'

export interface IAgendamentoRepository {
    create(agendamento: Agendamento): Promise<Number[]>;
    delete(id: string): Promise<void>;
}