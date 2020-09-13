export interface ICreateFuncionarioRequestDTO {
    id?: number;
    entityId?: string;
    name: string;
    phone: number;
    login: string;
    password: string;
}