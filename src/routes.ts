import express from 'express'
import { 
    agendaController,
    servicoControler,
    clienteController,
    funcionarioController,
    produtoControler } from './controllers'

const routes = express.Router()

//                  STATIC ROUTES
//---------------------Services--------------------------
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

//---------------------Products--------------------------
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
//
//
//                      REST ROUTES
//
//
//---------------------Services--------------------------
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

//---------------------Products---------------------------
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

//---------------------Customers---------------------------
routes.post('/clients', (request, response) => {
    return clienteController.create(request, response)
})

routes.get('/clients', (request, response) => {
    return clienteController.getAll(request, response)
})

routes.get('/clients/:id', (request, response) => {
    return clienteController.getById(request, response)
})

routes.post('/clients/:id', (request, response) => {
    return clienteController.update(request, response)
})

routes.delete('/clients/:id', (request, response) => {
    return clienteController.delete(request, response)
})

//---------------------Employees---------------------------
routes.post('/employees', (request, response) => {
    return funcionarioController.create(request, response)
})

routes.get('/employees', (request, response) => {
    return funcionarioController.getAll(request, response)
})

routes.get('/employees/:id', (request, response) => {
    return funcionarioController.getById(request, response)
})

routes.post('/employees/:id', (request, response) => {
    return funcionarioController.update(request, response)
})

routes.delete('/employees/:id', (request, response) => {
    return funcionarioController.delete(request, response)
})

//---------------------Agenda---------------------------
routes.post('/agenda', (request, response) => {
    return agendaController.create(request, response)
})

routes.get('/agenda', (request, response) => {
    return agendaController.getAll(request, response)
})

routes.get('/agenda/:id', (request, response) => {
    return agendaController.getById(request, response)
})

routes.post('/agenda/:id', (request, response) => {
    return agendaController.update(request, response)
})

routes.delete('/agenda/:id', (request, response) => {
    return agendaController.delete(request, response)
})


export  { routes }