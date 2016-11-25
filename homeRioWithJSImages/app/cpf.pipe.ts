import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cpf'})
export class CpfPipe implements PipeTransform {
    transform(valor: string, args: string[]): any {
        if (!valor) return valor;

        if (valor.length == 11) {
            return valor.substr(0, 3) + "." + valor.substr(3, 3) + "." + valor.substr(6, 3) + "-" + valor.substr(9);
        }
        else {
            return valor;
        }
    }
}