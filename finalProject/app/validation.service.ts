export class ValidationService {
    static validaNome(nome: string): boolean {
        if (nome == null || nome == "" || nome == 'undefined') {
            return true;
        }

        if (nome.match(/^[A-Z][a-zA-ZÀ-ú ]{3,}/)) {
            return true;
        } else {
            return false;
        }
    }

    static validaTelefone(fone: string): boolean {
        if (fone == null || fone == "" || fone == 'undefined') {
            return true;
        }

        if (fone.match(/[0-9]{9}/)) {
            return true;
        } else {
            return false;
        }
    }

    static validaEndereco(endereco: string): boolean {
        if (endereco == null || endereco == "" || endereco == 'undefined') {
            return true;
        }

        if (endereco.match(/^[A-Z][a-zA-Z-, ]{3,}/)) {
            return true;
        } else {
            return false;
        }
    }

    static validaBairro(bairro: string): boolean {
        if (bairro == null || bairro == "" || bairro == 'undefined') {
            return true;
        }

        if (bairro.match(/^[A-Z][a-zA-Z-, ]{3,}/)) {
            return true;
        } else {
            return false;
        }
    }

    static validaCidade(cidade: string): boolean {
        if (cidade == null || cidade == "" || cidade == 'undefined') {
            return true;
        }
        if (cidade.match(/^[A-Z][a-zA-Z-, ]{3,}/)) {
            return true;
        } else {
            return false;
        }
    }

    static validaEstado(estado: string): boolean {
        if (estado == null || estado == "" || estado == 'undefined') {
            return true;
        }

        if (estado.match(/^[A-Z][a-zA-Z- ]{3,}/)) {
            return true;
        } else {
            return false;
        }
    }

    static validaProfissao(profissao: string): boolean {
        if (profissao == "0") {
            return false;
        } else {
            return true;
        }
    }
x
    static validaSexo(sexo: string): boolean {
        if ((sexo == "M") || (sexo == "F")) {
            return true;
        } else {
            return false;
        }
    }
}