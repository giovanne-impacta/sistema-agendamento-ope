import express from 'express'
import { 
    servicoControler, 
    produtoControler } from './controllers'

const routes = express.Router()

//STATIC ROUTES
routes.get('/servicos', (request, response) => {
    return servicoControler.show(request, response)
})

routes.get('/novo_servico', (request, response) => {
    return response.render('novo_servico', {request: request})
})

routes.get('/editar_servico/:id', async (request, response) => {

    const servico = await servicoControler.getInfo(request, response)

    return response.render('editar_servico', {request: request, servico: servico})
})

routes.get('/produtos', (request, response) => {
    return produtoControler.show(request, response)
})

routes.get('/novo_produto', (request, response) => {
    return response.render('novo_produto', {request: request})
})

routes.get('/editar_produto/:id', async (request, response, next) => {

    const produto = await produtoControler.getInfo(request, response)

    return response.render('editar_produto', {request: request, produto: produto})
})
//-----------------------------------------------------

// REST ROUTES
//---------------------Prices--------------------------
routes.post('/prices', (request, response) => {
    return servicoControler.create(request, response)
})
routes.get('/prices', (request, response) => {
    return servicoControler.getAll(request, response)
})
routes.get('/prices/:id', (request, response) => {
    return servicoControler.getById(request, response)
})
routes.post('/prices/:id', (request, response) => {
    return servicoControler.update(request, response)
})
routes.delete('/prices/:id', (request, response) => {
    return servicoControler.delete(request, response)
})

//---------------------Stock---------------------------
routes.post('/stock', (request, response) => {
    return produtoControler.create(request, response)
})
routes.get('/stock', (request, response) => {
    return produtoControler.getAll(request, response)
})
routes.get('/stock/:id', (request, response) => {
    return produtoControler.getById(request, response)
})
routes.post('/stock/:id', (request, response) => {
    return produtoControler.update(request, response)
})
routes.delete('/stock/:id', (request, response) => {
    return produtoControler.delete(request, response)
})
export  { routes }