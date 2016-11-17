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
var forms_1 = require('@angular/forms');
var validation_service_1 = require('./validation.service');
var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.usuarioForm = {
            nome: '',
            email: '',
            cep: '',
            estado: '',
            cidade: '',
            endereco: '',
            complemento: '',
            cpf: '',
            cnpj: '',
            dataNasc: '',
            salario: ''
        };
        // Em javascript se uma função é chamada faltando argumentos (menos do que declarado), os valores que estiverem
        // faltando são designados para undefined. Já em typescript podemos definir o parâmetro como opcional com ?.
        // Resseta para cada campo a mensagem
        this.formErrors = {
            'nome': '',
            'email': '',
            'cep': '',
            'estado': '',
            'cidade': '',
            'endereco': '',
            'complemento': '',
            'cpf': '',
            'cnpj': '',
            'dataNasc': '',
            'salario': ''
        };
        this.submitted = false;
        this.respostaDataNoFormatoToString = '';
        this.respostaDataFormatadaComBarra = '';
        this.respostaDataCriadaAPartirDoToString = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    AppComponent.prototype.buildForm = function () {
        var _this = this;
        this.usuarioGroup = this.fb.group({
            'nome': [this.usuarioForm.nome, [forms_1.Validators.required, validation_service_1.ValidationService.nomeValido]],
            'email': [this.usuarioForm.email, [forms_1.Validators.required, validation_service_1.ValidationService.emailValido]],
            'cep': [this.usuarioForm.cep, [forms_1.Validators.required, validation_service_1.ValidationService.cepValido]],
            'estado': [this.usuarioForm.estado, [forms_1.Validators.required, validation_service_1.ValidationService.estadoValido]],
            'cidade': [this.usuarioForm.cidade, [forms_1.Validators.required, validation_service_1.ValidationService.cidadeValido]],
            'endereco': [this.usuarioForm.endereco, [forms_1.Validators.required, validation_service_1.ValidationService.enderecoValido]],
            'complemento': [this.usuarioForm.complemento, [forms_1.Validators.required, validation_service_1.ValidationService.complementoValido]],
            'cpf': [this.usuarioForm.cpf, [forms_1.Validators.required, validation_service_1.ValidationService.cpfValido]],
            'cnpj': [this.usuarioForm.cnpj, [forms_1.Validators.required, validation_service_1.ValidationService.cnpjValido]],
            'dataNasc': [this.usuarioForm.dataNasc, forms_1.Validators.required],
            'salario': [this.usuarioForm.salario, [forms_1.Validators.required, validation_service_1.ValidationService.valorMonetarioValido]]
        });
        this.usuarioGroup.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        //      this.usuarioGroup.valueChanges.subscribe(function(data) { this.onValueChanged(data)} );
        this.onValueChanged(); // (re)setando as mensagens de validação agora.
    };
    // O objetivo deste método é montar o objeto formErrors que irá conter, para cada campo do formulário, a mensagem
    // de erro correspondente, caso exista.
    AppComponent.prototype.onValueChanged = function (data) {
        console.log('data = ', data);
        // data =  Object {nome: "1", cpf: "", dataNasc: "", salario: ""}
        var form = this.usuarioGroup;
        for (var field in this.formErrors) {
            this.formErrors[field] = ''; // limpando mensagens de erro anteriores - o mesmo que this.formErrors.nome ...
            // control representa cada um dos 4 campos de usuarioGroup acima.
            var control = form.get(field);
            if (control && !control.valid) {
                var messages = validation_service_1.ValidationService.validationMessages[field]; // O mesmo que ValidationService.validationMessages.nome, etc
                console.log('messages = ', messages);
                // messages =  Object {required: "Campo Nome de preenchimento obrigatório", invalidNome: "Nome inválido"}
                // messages =  Object {required: "Campo CPF de preenchimento obrigatório", invalidCPF: "CPF inválido"}
                // messages =  Object {required: "Campo Data de Nasc de preenchimento obrigatório"}
                // messages =  Object {required: "Campo Salário de preenchimento obrigatório", invalidValorMonetario: "Salário inválido"}
                for (var key in control.errors) {
                    console.log('key = ', key);
                    // key =  invalidNome
                    // key =  required
                    // key =  required
                    // key =  required
                    this.formErrors[field] += messages[key] + ' ';
                    console.log('this.formErrors[field] = ', this.formErrors[field]);
                }
            }
        }
    };
    AppComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.usuarioGroup.valid)
            return;
        this.respostaNome = 'Nome = ' + this.usuarioGroup.value.nome;
        this.respostaEmail = 'Email = ' + this.usuarioGroup.value.email;
        this.respostaCEP = 'CEP = ' + this.usuarioGroup.value.cep;
        this.respostaEstado = 'Estado = ' + this.usuarioGroup.value.estado;
        this.respostaCidade = 'Cidade = ' + this.usuarioGroup.value.cidade;
        this.respostaEndereco = 'Endereço = ' + this.usuarioGroup.value.endereco;
        this.respostaComplemento = 'Complemento = ' + this.usuarioGroup.value.complemento;
        this.respostaCPF = 'CPF = ' + this.usuarioGroup.value.cpf;
        this.respostaCNPJ = 'CNPJ = ' + this.usuarioGroup.value.cnpj;
        if (this.usuarioGroup.value.dataNasc != null) {
            this.respostaDataNoFormatoToString = 'Data no formato toString() = ' + this.usuarioGroup.value.dataNasc; // retorna uma data cujo toString() é yyyy-MM-dd
            this.respostaDataFormatadaComBarra = 'Data formatada com barra = ' +
                this.usuarioGroup.value.dataNasc.substring(8, 10) + "/" +
                this.usuarioGroup.value.dataNasc.substring(5, 7) + "/" +
                this.usuarioGroup.value.dataNasc.substring(0, 4);
            this.respostaDataCriadaAPartirDoToString = 'Data criada a partir do toString() = ' + new Date(this.usuarioGroup.value.dataNasc.toString() + " 12:00:00.0");
        }
        this.respostaSalarioComoFoiDigitado = 'Salário como foi digitado = ' + this.usuarioGroup.value.salario;
        if (this.usuarioGroup.value.salario != "") {
            var salario = parseFloat(this.usuarioGroup.value.salario.replace(',', '.'));
            this.respostaSalarioFormatado = 'Salário formatado = ' +
                salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'angular-app',
            templateUrl: 'app/partials/app.component.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map