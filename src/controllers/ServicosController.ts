import { Request, Response } from 'express'
import { ServicosService } from '../services/ServicosService';

export class ServicosController {

    constructor(
        private servicosService: ServicosService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        const servicos = await this.servicosService.getAllServices()
        return response.render('servicos', {request: request, prices: servicos})
    }

    async getInfo(request: Request, response: Response){
        try {
            const { id } = request.params
            
            const servico = await this.servicosService.getServiceById(id)


            return servico

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, value } = request.body

            await this.servicosService.createService({ description, value })
            response.redirect('/servicos')
            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const servicos = await this.servicosService.getAllServices()

            return response.json(servicos)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const servico = await this.servicosService.getServiceById(id)


            return response.json(servico)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, value } = request.body

            await this.servicosService.updateService({ description, value}, id)

            response.redirect('/servicos')
            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.servicosService.deleteService(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
