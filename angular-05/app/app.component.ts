import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from './validation.service';

interface UsuarioForm {
    nome: string,
    email: string,
    cep: string,
    estado: string,
    cidade: string,
    endereco: string,
    complemento: string,
    cpf: string,
    cnpj: string,
    dataNasc: string,
    salario: string
}

@Component({
    selector: 'angular-app',
    templateUrl: 'app/partials/app.component.html',
    styleUrls: ['app/css/styles.css']
})

export class AppComponent {

    usuarioForm: UsuarioForm = {
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
    usuarioGroup: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    buildForm(): void {
        this.usuarioGroup = this.fb.group({
            'nome': [this.usuarioForm.nome, [Validators.required, ValidationService.nomeValido]],
            'email': [this.usuarioForm.email, [Validators.required, ValidationService.emailValido]],
            'cep': [this.usuarioForm.cep, [Validators.required, ValidationService.cepValido]],
            'estado': [this.usuarioForm.estado, [Validators.required, ValidationService.estadoValido]],
            'cidade': [this.usuarioForm.cidade, [Validators.required, ValidationService.cidadeValido]],
            'endereco': [this.usuarioForm.endereco, [Validators.required, ValidationService.enderecoValido]],
            'complemento': [this.usuarioForm.complemento, [Validators.required, ValidationService.complementoValido]],
            'cpf': [this.usuarioForm.cpf, [Validators.required, ValidationService.cpfValido]],
            'cnpj': [this.usuarioForm.cnpj, [Validators.required, ValidationService.cnpjValido]],
            'dataNasc': [this.usuarioForm.dataNasc, Validators.required],
            'salario': [this.usuarioForm.salario, [Validators.required, ValidationService.valorMonetarioValido]]
        });
        this.usuarioGroup.valueChanges.subscribe(data => this.onValueChanged(data));
//      this.usuarioGroup.valueChanges.subscribe(function(data) { this.onValueChanged(data)} );
        this.onValueChanged(); // (re)setando as mensagens de validação agora.
    }

    // Em javascript se uma função é chamada faltando argumentos (menos do que declarado), os valores que estiverem
    // faltando são designados para undefined. Já em typescript podemos definir o parâmetro como opcional com ?.

    // Resseta para cada campo a mensagem
    formErrors = {
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

    // O objetivo deste método é montar o objeto formErrors que irá conter, para cada campo do formulário, a mensagem
    // de erro correspondente, caso exista.

    onValueChanged(data?: any) {

        console.log('data = ', data);
        // data =  Object {nome: "1", cpf: "", dataNasc: "", salario: ""}

        var form = this.usuarioGroup;
        for (var field in this.formErrors) {    // field irá valer: nome, cpf, dataNasc e salario
            this.formErrors[field] = '';  // limpando mensagens de erro anteriores - o mesmo que this.formErrors.nome ...

            // control representa cada um dos 4 campos de usuarioGroup acima.
            var control = form.get(field);
            if (control && !control.valid) {
                var messages = ValidationService.validationMessages[field];  // O mesmo que ValidationService.validationMessages.nome, etc
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
                    // this.formErrors[nome] =  Nome inválido
                    // this.formErrors[cpf] =  Campo CPF de preenchimento obrigatório
                    // this.formErrors[dataNasc] =  Campo Data de Nasc de preenchimento obrigatório
                    // this.formErrors[salario] =  Campo Salário de preenchimento obrigatório
                }
            }
        }
    }

    submitted: boolean = false;

    respostaNome: string;
    respostaEmail: string;
    respostaCEP: string;
    respostaEstado: string;
    respostaCidade: string;
    respostaEndereco: string;
    respostaComplemento: string;
    respostaCPF: string;
    respostaCNPJ: string;
    respostaDataNoFormatoToString: string = '';
    respostaDataFormatadaComBarra: string = '';
    respostaDataCriadaAPartirDoToString: string = '';
    respostaSalarioComoFoiDigitado: string;
    respostaSalarioFormatado: string;

    onSubmit() {
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
            var salario: number = parseFloat(this.usuarioGroup.value.salario.replace(',', '.'));
            this.respostaSalarioFormatado = 'Salário formatado = ' +
                salario.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        }
    }
}
