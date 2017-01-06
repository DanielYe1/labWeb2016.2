"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.validaNome = function (nome) {
        if (nome == null || nome == "" || nome == 'undefined') {
            return true;
        }
        if (nome.match(/^[A-Z][a-zA-ZÀ-ú ]{3,}/)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.validaTelefone = function (fone) {
        if (fone == null || fone == "" || fone == 'undefined') {
            return true;
        }
        if (fone.match(/[0-9]{9}/)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.validaEndereco = function (endereco) {
        if (endereco == null || endereco == "" || endereco == 'undefined') {
            return true;
        }
        if (endereco.match(/^[A-Z][a-zA-Z-, ]{3,}/)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.validaBairro = function (bairro) {
        if (bairro == null || bairro == "" || bairro == 'undefined') {
            return true;
        }
        if (bairro.match(/^[A-Z][a-zA-Z-, ]{3,}/)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.validaCidade = function (cidade) {
        if (cidade == null || cidade == "" || cidade == 'undefined') {
            return true;
        }
        if (cidade.match(/^[A-Z][a-zA-Z-, ]{3,}/)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.validaEstado = function (estado) {
        if (estado == null || estado == "" || estado == 'undefined') {
            return true;
        }
        if (estado.match(/^[A-Z][a-zA-Z- ]{3,}/)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationService.validaProfissao = function (profissao) {
        if (profissao == "0") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.validaSexo = function (sexo) {
        if ((sexo == "M") || (sexo == "F")) {
            return true;
        }
        else {
            return false;
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map