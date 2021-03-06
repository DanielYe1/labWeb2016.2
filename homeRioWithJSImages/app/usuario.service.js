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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx'); // Importa todos os operadores de Observable
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.totalUsuarios = 2;
        this.usuariosUrl = 'app/usuarios'; // URL para a 'web api'
    }
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get(this.usuariosUrl)
            .map(function (response) {
            console.log(response.json().data);
            return response.json().data;
        })
            .catch(function (erro) {
            return Rx_1.Observable.throw('status - ' + (erro.status) + ' '
                + (erro.statusText) + ' - '
                + (erro._body));
            // return Observable.throw(erro);
        });
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map