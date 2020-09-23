import { IFuncionarioRepository } from '../repositories/IFuncionarioRepository'
import { ICreateFuncionarioRequestDTO } from '../domain/DTO/FuncionarioDTO';
import { Funcionario } from '../domain/models/Funcionario';
import { ConvertTime } from '../utils/ConvertingTime'

export class FuncionarioService {
    
    constructor ( 
        private funcionarioRepository: IFuncionarioRepository
        ){}

    async create(funcionarioData: ICreateFuncionarioRequestDTO) {

        var starts = new Date(parseInt(funcionarioData.starts)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        var ends = new Date(parseInt(funcionarioData.ends)).toISOString().replace(/T/, ' ').replace(/\..+/, '')

        funcionarioData.starts = starts
        funcionarioData.ends = ends
        const funcionario = new Funcionario(funcionarioData);

        await this.funcionarioRepository.create(funcionario);
    }

    async getAll() {
        const funcionario: Funcionario[] = await this.funcionarioRepository.get()
        funcionario.forEach(f => {
            f.starts = ConvertTime(f.starts, true)
            f.ends = ConvertTime(f.ends, true)
        })
        return funcionario
    }

    async getById(id: string) {
        const funcionario: Funcionario = await this.funcionarioRepository.getById(id)
        funcionario.starts = ConvertTime(funcionario.starts, false)
        funcionario.ends = ConvertTime(funcionario.ends, false)

        return funcionario
    }

    async update(funcionarioData: ICreateFuncionarioRequestDTO, id: string) {
        const clienteAlreadyExists = await this.funcionarioRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('funcionario não encontrado.');

        var starts = new Date(parseInt(funcionarioData.starts)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        var ends = new Date(parseInt(funcionarioData.ends)).toISOString().replace(/T/, ' ').replace(/\..+/, '')

        funcionarioData.starts = starts
        funcionarioData.ends = ends

        const funcionario = new Funcionario(funcionarioData);

        await this.funcionarioRepository.update(funcionario, id);
    }

    async delete(id: string) {
        const clienteAlreadyExists = await this.funcionarioRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('funcionario não encontrado.');

        await this.funcionarioRepository.delete(id);
    }
}
