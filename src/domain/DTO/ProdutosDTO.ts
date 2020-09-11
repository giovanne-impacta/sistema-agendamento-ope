export interface ICreateProdutoRequestDTO {
    id?: number;
    entityId?: string;
    description: string;
    quantity: number;
    value: number;
}