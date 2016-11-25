import { Injectable }  from '@angular/core';
import { Http }        from '@angular/http';
import { Observable }  from 'rxjs/Rx';   // Importa todos os operadores de Observable
import { Usuario }     from './usuario';

@Injectable()
export class UsuarioService {

    constructor(private http: Http) {}

    private totalUsuarios = 2;
    private usuariosUrl = 'app/usuarios';  // URL para a 'web api'

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.usuariosUrl)
            .map(response => {
                console.log(response.json().data);
                return response.json().data as Usuario[];
            })
            .catch(erro => {
                return Observable.throw('status - ' + (erro.status) + ' '
                                                    + (erro.statusText) + ' - '
                                                    + (erro._body));
                // return Observable.throw(erro);
            })
    }
}