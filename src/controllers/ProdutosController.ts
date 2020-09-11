import { Request, Response } from 'express'
import { ProdutosService  } from '../services/ProdutosService';

export class ProdutosController {

    constructor(
        private produtosService: ProdutosService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        const produtos = await this.produtosService.getAllProducts()
        return response.render('produtos', {request: request, produtos: produtos})
    }

    async getInfo(request: Request, response: Response){
        try {

            const { id } = request.params

            const produto = await this.produtosService.getProdutosById(id)

            return produto

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, quantity, value } = request.body
            
            await this.produtosService.createProduto({ description, quantity, value })
            response.redirect('/produtos')
            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const produtos = await this.produtosService.getAllProducts()

            return response.json(produtos)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const produto = await this.produtosService.getProdutosById(id)

            return response.json(produto)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, quantity, value } = request.body

            await this.produtosService.updateProduto({ description, quantity, value}, id)

            response.redirect('/produtos')
            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.produtosService.deleteProduto(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
