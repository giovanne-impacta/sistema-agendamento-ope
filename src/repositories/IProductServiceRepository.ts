import { ProductService } from "../domain/models/ProductService";
import { ICreateProductServiceRequestDTO } from '../domain/DTO/ProdutoServicoDTO'

export interface IProductServiceRepository {
    create(agendamento: ProductService): Promise<Number[]>;
    delete(id: string): Promise<void>;
}