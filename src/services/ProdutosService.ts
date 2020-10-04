import { IProdutosRepository } from '../repositories/IProdutosRepository'
import { ICreateProdutoRequestDTO } from '../domain/DTO/ProdutosDTO';
import { Produto } from '../domain/models/Produto';

export class ProdutosService {
    
    constructor ( 
        private produtosRepository: IProdutosRepository
        ){}

    async create(ProdutoData: ICreateProdutoRequestDTO) {

        const produto = new Produto(ProdutoData);

        await this.produtosRepository.create(produto);
    }

    async getAll() {
        const Produtos: Produto[] = await this.produtosRepository.getProdutos()

        return Produtos
    }

    async getById(id: string) {
        const produto: Produto = await this.produtosRepository.getProdutosById(id)

        return produto
    }

    async update(ProdutoData: ICreateProdutoRequestDTO, id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getProdutosById(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        const produto = new Produto(ProdutoData);

        await this.produtosRepository.update(produto, id);
    }

    async delete(id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getProdutosById(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        await this.produtosRepository.delete(id);
    }
}
