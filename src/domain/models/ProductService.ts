import uuid from 'uuid-random';

export class ProductService {
    public readonly id!: number;

    public readonly entityId!: string;
    public idProduto: number;
    public idServicos: number;
    public idAgenda: number;

    constructor(props: Omit<ProductService, 'id' | 'entityId'>, entityId?: string) {

        this.idProduto = props.idProduto;
        this.idServicos = props.idServicos
        this.idAgenda = props.idAgenda

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}