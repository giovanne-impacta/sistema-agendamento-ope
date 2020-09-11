import { Produtos } from "../domain/models/Produtos";

export interface IProdutosRepository {
    getProdutos(): Promise<Produtos[]>;
    getProdutosById(id: string): Promise<Produtos>;
    create(produto: Produtos): Promise<void>;
    update(produtos: Produtos, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}