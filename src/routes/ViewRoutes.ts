import express from 'express'
import { 
    agendaController,
    servicoControler,
    clienteController,
    funcionarioController,
    produtoControler } from '../controllers'

const routesView = express.Router()

//                  STATIC ROUTES
//---------------------Agendis :)--------------------------
routesView.get('/agendas', async (request, response) => {

    const agendas = await agendaController.getAll(request, response)
    const clientes = await clienteController.getAll(request, response)
    const servicos = await servicoControler.getAll(request, response)
    const funcionarios = await funcionarioController.getAll(request, response)

    return response.render('agendas', {
        request: request,
        agendas: agendas,
        clientes: clientes,
        servicos: servicos,
        funcionarios: funcionarios
    })

})

//---------------------Services--------------------------
routesView.get('/servicos', (request, response) => {
    return servicoControler.show(request, response)
})

routesView.get('/novo_servico', (request, response) => {
    return response.render('novo_servico', {request: request})
})

routesView.get('/editar_servico/:id', async (request, response) => {

    const servico = await servicoControler.getInfo(request, response)

    return response.render('editar_servico', {request: request, servico: servico})

})

//---------------------Products--------------------------
routesView.get('/produtos', (request, response) => {
    return produtoControler.show(request, response)
})

routesView.get('/novo_produto', (request, response) => {
    return response.render('novo_produto', {request: request})
})

routesView.get('/editar_produto/:id', async (request, response) => {

    const produto = await produtoControler.getInfo(request, response)

    return response.render('editar_produto', {request: request, produto: produto})
})

//---------------------Employees--------------------------
routesView.get('/funcionarios', (request, response) => {
    return funcionarioController.show(request, response)
})

routesView.get('/novo_funcionario', (request, response) => {
    return response.render('novo_funcionario', {request: request})
})

routesView.get('/editar_funcionario/:id', async (request, response) => {

    const funcionario = await funcionarioController.getInfo(request, response)

    return response.render('editar_funcionario', {request: request, funcionario: funcionario})
})

//---------------------Customers--------------------------
routesView.get('/clientes', (request, response) => {
    return clienteController.show(request, response)
})

routesView.get('/novo_cliente', (request, response) => {
    return response.render('novo_cliente', {request: request})
})

routesView.get('/editar_cliente/:id', async (request, response) => {

    const cliente = await clienteController.getInfo(request, response)

    return response.render('editar_cliente', {request: request, cliente: cliente})
})

export  { routesView }