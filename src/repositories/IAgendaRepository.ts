import { Agenda } from "../domain/models/Agenda";
import { ICreateAgendaRequestDTO } from '../domain/DTO/AgendaDTO'

export interface IAgendaRepository {
    get(): Promise<Agenda[]>;
    getById(id: string): Promise<Agenda>;
    create(agenda: Agenda): Promise<void>;
    update(agenda: ICreateAgendaRequestDTO, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}