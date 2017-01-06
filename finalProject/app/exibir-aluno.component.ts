import {Component, OnInit}      from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {AlunoService}           from './aluno.service';
import {Aluno}                  from './aluno';
import {Profissao}              from './profissao';
import {Router}                 from '@angular/router';
import {ValidationService} from './validation.service';

@Component({
    selector: 'exibir-aluno',
    templateUrl: 'app/partials/exibir-aluno.component.html',
    styleUrls: ['app/css/exibir-aluno.css']
})

export class ExibirAlunoComponent implements OnInit {

    alunos: Aluno[];
    aluno: Aluno = null;
    isDesabilitado: boolean = true;

    nomeValido: boolean;
    telefoneValido: boolean;
    logradouroValido: boolean;
    bairroValido: boolean;
    cidadeValido: boolean;
    estadoValido: boolean;
    profissaoValido: boolean;
    sexoValido: boolean;

    profissaoValor: string;

    nomeDirty: boolean = false;
    telefoneDirty: boolean = false;
    logradouroDirty: boolean = false;
    bairroDirty: boolean = false;
    cidadeDirty: boolean = false;
    estadoDirty: boolean = false;
    profissaoDirty: boolean = false;
    sexoDirty: boolean = false;


    exibirEditar: boolean = true;
    exibirAlterar: boolean = false;
    mensagem: string = "Esta mensagem será alterada ao exibir!";
    visibilidade: string = "hidden";
    cor: string = "blue";

    exibirCadastrar: boolean = false;

    profissoes: Array<Profissao> = [
        {id: '1', label: "Médico"},
        {id: '2', label: "Engenheiro"},
        {id: '3', label: "Professor"},
        {id: '4', label: "Dentista"},
        {id: '5', label: "Publicitário"},
        {id: '6', label: "Outra"}
    ];

    constructor(private alunoService: AlunoService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    // Adicionar métodos

    ngOnInit(): void {
        console.log('executando ngOninit de ExibirAlunoComponent');

        let id = +this.route.snapshot.params['id'];
        console.log('id = ', id);
        // id =  NaN

        if (isNaN(id)) {
            this.novo();
        }
        else {
            this.alunoService.getAluno(id)
                .subscribe(
                    data => {
                        this.aluno = data;
                        this.mudaValores(this.aluno, "0");

                    },
                    err => {
                        this.mensagem = "Aluno NÃO encontrado! Status:" + err.status;
                        this.cor = "red";
                        this.visibilidade = "visible";
                    }
                );
        }
    }

    novo() {
        this.isDesabilitado = false;
        this.exibirEditar = false;
        this.exibirCadastrar = true;
        this.exibirAlterar = false;
        this.visibilidade = "hidden";

        this.aluno = {
            id: null,
            nome: '',
            sexo: '',
            profissao: '',
            endereco: '',
            bairro: '',
            cidade: '',
            estado: '',
            telefone: '',
            foto: 'avatar.png'
        }

    }


    editavel() {

        this.isDesabilitado = false;
        this.exibirEditar = false;
        this.exibirAlterar = true;
        this.visibilidade = "hidden";
        this.exibirCadastrar = false;


    }

    salvo() {
        this.isDesabilitado = true;
        this.exibirEditar = true;
        this.exibirAlterar = false;
        this.exibirCadastrar = false;
    }

    cadastrar(aluno: Aluno) {
        if ((ValidationService.validaNome(aluno.nome)) && (ValidationService.validaTelefone(aluno.telefone))
            && (ValidationService.validaEndereco(aluno.endereco)) && (ValidationService.validaBairro(aluno.bairro))
            && (ValidationService.validaCidade(aluno.cidade)) && (ValidationService.validaEstado(aluno.estado))) {
            this.salvo();
            this.alunoService.cadastrar(aluno)
                .subscribe(
                    resposta => {
                        console.log(resposta);
                        this.mensagem = "Aluno cadastrado com sucesso!";
                        this.cor = "blue";
                        this.visibilidade = "visible";
                    },
                    err => {
                        this.mensagem = "Aluno NÃO cadastrado! Status:" + err.status;
                        this.cor = "red";
                        this.visibilidade = "visible";
                    }
                );
        } else {

            this.mensagem = "Aluno NÃO cadastrado!";
            this.cor = "red";
            this.visibilidade = "visible";

        }


    }

    alterar(aluno: Aluno) {

        if ((ValidationService.validaNome(aluno.nome)) && (ValidationService.validaTelefone(aluno.telefone))
            && (ValidationService.validaEndereco(aluno.endereco)) && (ValidationService.validaBairro(aluno.bairro))
            && (ValidationService.validaCidade(aluno.cidade)) && (ValidationService.validaEstado(aluno.estado))) {
            this.salvo();
            this.alunoService.atualizar(aluno)
                .subscribe(
                    resposta => {
                        console.log(resposta);
                        this.mensagem = "Aluno atualizado com sucesso!";
                        this.cor = "blue";
                        this.visibilidade = "visible";
                    },
                    err => {
                        this.mensagem = "Aluno NÃO atualizado! Status:" + err.status;
                        ;
                        this.cor = "red";
                        this.visibilidade = "visible";
                    }
                );
        } else {
            this.mensagem = "Aluno NÃO atualizado! Revise os dados modificados.";
            this.cor = "red";
            this.visibilidade = "visible";

        }


    }

    voltar(): void {
        let link = ['/alunos/exibirtodos'];
        this.router.navigate(link);
        // window.history.back();
    }

    // Adicionar métodos getVisibilidade() e getCor()

    getVisibilidade() {
        return this.visibilidade;
    }

    getCor() {
        return this.cor;
    }

    mudaValores(aluno: Aluno, numProfissao: string): void {
        if (numProfissao == "0") {
            this.nomeValido = ValidationService.validaNome(aluno.nome);
            this.telefoneValido = ValidationService.validaTelefone(aluno.telefone);
            this.logradouroValido = ValidationService.validaEndereco(aluno.endereco);
            this.bairroValido = ValidationService.validaBairro(aluno.bairro);
            this.cidadeValido = ValidationService.validaCidade(aluno.cidade);
            this.estadoValido = ValidationService.validaEstado(aluno.estado);
            this.profissaoValido = ValidationService.validaProfissao(aluno.profissao);
            this.sexoValido = ValidationService.validaSexo(aluno.sexo);
            if (aluno.profissao == "1") {
                this.profissaoValor = "Médico";
            }
            if (aluno.profissao == "2") {
                this.profissaoValor = "Engenheiro";
            }
            if (aluno.profissao == "3") {
                this.profissaoValor = "Professor";
            }
            if (aluno.profissao == "4") {
                this.profissaoValor = "Dentista";
            }
            if (aluno.profissao == "5") {
                this.profissaoValor = "Publicitario";
            }
            if (aluno.profissao == "6") {
                this.profissaoValor = "Outro";
            }
        }
        if (numProfissao == "1") {
            this.nomeValido = ValidationService.validaNome(aluno.nome);
            this.nomeDirty = true;
        }
        if (numProfissao == "2") {
            this.telefoneValido = ValidationService.validaTelefone(aluno.telefone);
            this.telefoneDirty = true;
        }
        if (numProfissao == "3") {
            this.logradouroValido = ValidationService.validaEndereco(aluno.endereco);
            this.logradouroDirty = true;
        }
        if (numProfissao == "4") {
            this.bairroValido = ValidationService.validaBairro(aluno.bairro);
            this.bairroDirty = true;
        }
        if (numProfissao == "5") {
            this.cidadeValido = ValidationService.validaCidade(aluno.cidade);
            this.cidadeDirty = true;
        }
        if (numProfissao == "6") {
            this.estadoValido = ValidationService.validaEstado(aluno.estado);
            this.estadoDirty = true;
        }
        if (numProfissao == "7") {
            this.sexoDirty = true;
        }
        if (numProfissao == "8") {
            this.profissaoValido = ValidationService.validaProfissao(aluno.profissao);
            this.profissaoDirty = true;
            if (aluno.profissao == "1") {
                this.profissaoValor = "Médico";
            }
            if (aluno.profissao == "2") {
                this.profissaoValor = "Engenheiro";
            }
            if (aluno.profissao == "3") {
                this.profissaoValor = "Professor";
            }
            if (aluno.profissao == "4") {
                this.profissaoValor = "Dentista";
            }
            if (aluno.profissao == "5") {
                this.profissaoValor = "Publicitario";
            }
            if (aluno.profissao == "6") {
                this.profissaoValor = "Outro";
            }
        }

    }
}    