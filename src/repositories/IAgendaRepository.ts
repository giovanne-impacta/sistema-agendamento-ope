import { Agenda } from "../domain/models/Agenda";

export interface IAgendaRepository {
    get(): Promise<Agenda[]>;
    getById(id: string): Promise<Agenda>;
    create(agenda: Agenda): Promise<void>;
    update(agenda: Agenda, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}