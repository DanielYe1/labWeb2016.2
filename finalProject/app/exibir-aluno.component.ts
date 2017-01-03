import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlunoService }           from './aluno.service';
import { Aluno }                  from './aluno';
import { Profissao }              from './profissao';
import { Router }                 from '@angular/router';

@Component({
    selector: 'exibir-aluno',
    templateUrl: 'app/partials/exibir-aluno.component.html',
    styleUrls: ['app/css/exibir-aluno.css']
})

export class ExibirAlunoComponent implements OnInit{

    alunos: Aluno[];
    aluno: Aluno = null;
    isDesabilitado: boolean = true;

    // Adicionar campos aqui!
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

    constructor(private alunoService:AlunoService,
                private route:ActivatedRoute,
                private router: Router) { }

    // Adicionar métodos

    ngOnInit():void {
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
        this.salvo();
        this.alunoService.cadastrar(aluno)
            .subscribe(
                resposta => {
                    console.log (resposta);
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
    }

    alterar(aluno: Aluno) {
        this.salvo();
        this.alunoService.atualizar(aluno)
            .subscribe(
                resposta => {
                    console.log (resposta);
                    this.mensagem = "Aluno alterado com sucesso!";
                    this.cor = "blue";
                    this.visibilidade = "visible";
                },
                err => {
                    this.mensagem = "Aluno NÃO alterado! Status:" + err.status;
                    this.cor = "red";
                    this.visibilidade = "visible";
                }
            );
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

}
