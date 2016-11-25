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
var ValorMonetarioPipe = (function () {
    function ValorMonetarioPipe() {
    }
    ValorMonetarioPipe.prototype.transform = function (valor, args) {
        if (!valor)
            return valor;
        if (isNaN(Number(valor))) {
            var salario = Number(valor.replace(',', '.'));
            var val = salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true });
        }
        else {
            var val = Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true });
        }
        return val;
    };
    ValorMonetarioPipe = __decorate([
        core_1.Pipe({ name: 'valorMonetario' }), 
        __metadata('design:paramtypes', [])
    ], ValorMonetarioPipe);
    return ValorMonetarioPipe;
}());
exports.ValorMonetarioPipe = ValorMonetarioPipe;
//# sourceMappingURL=valor-monetario.pipe.js.map