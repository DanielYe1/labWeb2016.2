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
var usuario_service_1 = require('./usuario.service');
var ListaDeUsuariosComponent = (function () {
    function ListaDeUsuariosComponent(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuarios = [];
        this.erroUsu = '';
    }
    ListaDeUsuariosComponent.prototype.ngOnInit = function () {
        console.log('executou ngOnInit() de ExibirUsuariosComponent');
        this.getUsuarios();
    };
    ListaDeUsuariosComponent.prototype.getUsuarios = function () {
        var _this = this;
        this.usuarioService.getUsuarios()
            .subscribe(function (resposta) {
            _this.usuarios = resposta;
        }, function (erro) {
            _this.erroUsu = erro;
        });
    };
    ListaDeUsuariosComponent = __decorate([
        core_1.Component({
            selector: 'lista-de-usuarios',
            templateUrl: 'app/partials/lista-de-usuarios.component.html',
            styleUrls: ['app/css/lista-de-usuarios.css'],
            providers: [usuario_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
    ], ListaDeUsuariosComponent);
    return ListaDeUsuariosComponent;
}());
exports.ListaDeUsuariosComponent = ListaDeUsuariosComponent;
//# sourceMappingURL=lista-de-usuarios.component.js.map