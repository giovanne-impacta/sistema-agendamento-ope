import { IProdutosRepository } from '../repositories/IProdutosRepository'
import { ICreateProdutoRequestDTO } from '../domain/DTO/ProdutosDTO';
import { Produtos } from '../domain/models/Produtos';

export class ProdutosService {
    
    constructor ( 
        private produtosRepository: IProdutosRepository
        ){}

    async createProduto(ProdutoData: ICreateProdutoRequestDTO) {

        const produto = new Produtos(ProdutoData);

        await this.produtosRepository.create(produto);
    }

    async getAllProducts() {
        const Produtos: Produtos[] = await this.produtosRepository.getProdutos()

        return Produtos
    }

    async getProdutosById(id: string) {
        const produto: Produtos = await this.produtosRepository.getProdutosById(id)

        return produto
    }

    async updateProduto(ProdutoData: ICreateProdutoRequestDTO, id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getProdutosById(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        const produto = new Produtos(ProdutoData);

        await this.produtosRepository.update(produto, id);
    }

    async deleteProduto(id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getProdutosById(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        await this.produtosRepository.delete(id);
    }
}