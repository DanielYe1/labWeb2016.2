"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var aluno_service_1 = require('./aluno.service');
var router_2 = require('@angular/router');
var validation_service_1 = require('./validation.service');
var ExibirAlunoComponent = (function () {
    function ExibirAlunoComponent(alunoService, route, router) {
        this.alunoService = alunoService;
        this.route = route;
        this.router = router;
        this.aluno = null;
        this.isDesabilitado = true;
        this.nomeDirty = false;
        this.telefoneDirty = false;
        this.logradouroDirty = false;
        this.bairroDirty = false;
        this.cidadeDirty = false;
        this.estadoDirty = false;
        this.profissaoDirty = false;
        this.sexoDirty = false;
        this.exibirEditar = true;
        this.exibirAlterar = false;
        this.mensagem = "Esta mensagem será alterada ao exibir!";
        this.visibilidade = "hidden";
        this.cor = "blue";
        this.exibirCadastrar = false;
        this.profissoes = [
            { id: '1', label: "Médico" },
            { id: '2', label: "Engenheiro" },
            { id: '3', label: "Professor" },
            { id: '4', label: "Dentista" },
            { id: '5', label: "Publicitário" },
            { id: '6', label: "Outra" }
        ];
    }
    // Adicionar métodos
    ExibirAlunoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('executando ngOninit de ExibirAlunoComponent');
        var id = +this.route.snapshot.params['id'];
        console.log('id = ', id);
        // id =  NaN
        if (isNaN(id)) {
            this.novo();
        }
        else {
            this.alunoService.getAluno(id)
                .subscribe(function (data) {
                _this.aluno = data;
                _this.mudaValores(_this.aluno, "0");
            }, function (err) {
                _this.mensagem = "Aluno NÃO encontrado! Status:" + err.status;
                _this.cor = "red";
                _this.visibilidade = "visible";
            });
        }
    };
    ExibirAlunoComponent.prototype.novo = function () {
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
        };
    };
    ExibirAlunoComponent.prototype.editavel = function () {
        this.isDesabilitado = false;
        this.exibirEditar = false;
        this.exibirAlterar = true;
        this.visibilidade = "hidden";
        this.exibirCadastrar = false;
    };
    ExibirAlunoComponent.prototype.salvo = function () {
        this.isDesabilitado = true;
        this.exibirEditar = true;
        this.exibirAlterar = false;
        this.exibirCadastrar = false;
    };
    ExibirAlunoComponent.prototype.cadastrar = function (aluno) {
        var _this = this;
        if ((validation_service_1.ValidationService.validaNome(aluno.nome)) && (validation_service_1.ValidationService.validaTelefone(aluno.telefone))
            && (validation_service_1.ValidationService.validaEndereco(aluno.endereco)) && (validation_service_1.ValidationService.validaBairro(aluno.bairro))
            && (validation_service_1.ValidationService.validaCidade(aluno.cidade)) && (validation_service_1.ValidationService.validaEstado(aluno.estado))) {
            this.salvo();
            this.alunoService.cadastrar(aluno)
                .subscribe(function (resposta) {
                console.log(resposta);
                _this.mensagem = "Aluno cadastrado com sucesso!";
                _this.cor = "blue";
                _this.visibilidade = "visible";
            }, function (err) {
                _this.mensagem = "Aluno NÃO cadastrado! Status:" + err.status;
                _this.cor = "red";
                _this.visibilidade = "visible";
            });
        }
        else {
            this.mensagem = "Aluno NÃO cadastrado!";
            this.cor = "red";
            this.visibilidade = "visible";
        }
    };
    ExibirAlunoComponent.prototype.alterar = function (aluno) {
        var _this = this;
        if ((validation_service_1.ValidationService.validaNome(aluno.nome)) && (validation_service_1.ValidationService.validaTelefone(aluno.telefone))
            && (validation_service_1.ValidationService.validaEndereco(aluno.endereco)) && (validation_service_1.ValidationService.validaBairro(aluno.bairro))
            && (validation_service_1.ValidationService.validaCidade(aluno.cidade)) && (validation_service_1.ValidationService.validaEstado(aluno.estado))) {
            this.salvo();
            this.alunoService.atualizar(aluno)
                .subscribe(function (resposta) {
                console.log(resposta);
                _this.mensagem = "Aluno atualizado com sucesso!";
                _this.cor = "blue";
                _this.visibilidade = "visible";
            }, function (err) {
                _this.mensagem = "Aluno NÃO atualizado! Status:" + err.status;
                ;
                _this.cor = "red";
                _this.visibilidade = "visible";
            });
        }
        else {
            this.mensagem = "Aluno NÃO atualizado! Revise os dados modificados.";
            this.cor = "red";
            this.visibilidade = "visible";
        }
    };
    ExibirAlunoComponent.prototype.voltar = function () {
        var link = ['/alunos/exibirtodos'];
        this.router.navigate(link);
        // window.history.back();
    };
    // Adicionar métodos getVisibilidade() e getCor()
    ExibirAlunoComponent.prototype.getVisibilidade = function () {
        return this.visibilidade;
    };
    ExibirAlunoComponent.prototype.getCor = function () {
        return this.cor;
    };
    ExibirAlunoComponent.prototype.mudaValores = function (aluno, numProfissao) {
        if (numProfissao == "0") {
            this.nomeValido = validation_service_1.ValidationService.validaNome(aluno.nome);
            this.telefoneValido = validation_service_1.ValidationService.validaTelefone(aluno.telefone);
            this.logradouroValido = validation_service_1.ValidationService.validaEndereco(aluno.endereco);
            this.bairroValido = validation_service_1.ValidationService.validaBairro(aluno.bairro);
            this.cidadeValido = validation_service_1.ValidationService.validaCidade(aluno.cidade);
            this.estadoValido = validation_service_1.ValidationService.validaEstado(aluno.estado);
            this.profissaoValido = validation_service_1.ValidationService.validaProfissao(aluno.profissao);
            this.sexoValido = validation_service_1.ValidationService.validaSexo(aluno.sexo);
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
            this.nomeValido = validation_service_1.ValidationService.validaNome(aluno.nome);
            this.nomeDirty = true;
        }
        if (numProfissao == "2") {
            this.telefoneValido = validation_service_1.ValidationService.validaTelefone(aluno.telefone);
            this.telefoneDirty = true;
        }
        if (numProfissao == "3") {
            this.logradouroValido = validation_service_1.ValidationService.validaEndereco(aluno.endereco);
            this.logradouroDirty = true;
        }
        if (numProfissao == "4") {
            this.bairroValido = validation_service_1.ValidationService.validaBairro(aluno.bairro);
            this.bairroDirty = true;
        }
        if (numProfissao == "5") {
            this.cidadeValido = validation_service_1.ValidationService.validaCidade(aluno.cidade);
            this.cidadeDirty = true;
        }
        if (numProfissao == "6") {
            this.estadoValido = validation_service_1.ValidationService.validaEstado(aluno.estado);
            this.estadoDirty = true;
        }
        if (numProfissao == "7") {
            this.sexoDirty = true;
        }
        if (numProfissao == "8") {
            this.profissaoValido = validation_service_1.ValidationService.validaProfissao(aluno.profissao);
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
    };
    ExibirAlunoComponent = __decorate([
        core_1.Component({
            selector: 'exibir-aluno',
            templateUrl: 'app/partials/exibir-aluno.component.html',
            styleUrls: ['app/css/exibir-aluno.css']
        }), 
        __metadata('design:paramtypes', [aluno_service_1.AlunoService, router_1.ActivatedRoute, router_2.Router])
    ], ExibirAlunoComponent);
    return ExibirAlunoComponent;
}());
exports.ExibirAlunoComponent = ExibirAlunoComponent;
//# sourceMappingURL=exibir-aluno.component.js.map