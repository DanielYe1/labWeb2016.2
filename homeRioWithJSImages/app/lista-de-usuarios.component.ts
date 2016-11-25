import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService }           from './usuario.service';
import { Usuario }                  from './usuario';

@Component({
    selector: 'lista-de-usuarios',
    templateUrl: 'app/partials/lista-de-usuarios.component.html',
    styleUrls: ['app/css/lista-de-usuarios.css'],
    providers: [ UsuarioService ]
})

export class ListaDeUsuariosComponent {

    usuarios : Usuario[] = [];
    erroUsu: string = '';

    constructor(private usuarioService: UsuarioService) {}

    ngOnInit(): void {
        console.log('executou ngOnInit() de ExibirUsuariosComponent');
        this.getUsuarios();
    }

    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(
                resposta => {
                    this.usuarios = resposta;
                },
                erro => {
                    this.erroUsu = erro;
                }
            );
    }
}
