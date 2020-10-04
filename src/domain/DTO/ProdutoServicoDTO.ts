export interface ICreateProductServiceRequestDTO {
    id?: number;
    entityId?: string;
    productId: number;
    serviceId?: number;
    agendaId?: number;
}