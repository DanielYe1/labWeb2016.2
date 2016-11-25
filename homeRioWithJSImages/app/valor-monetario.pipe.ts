import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'valorMonetario'})
export class ValorMonetarioPipe implements PipeTransform {
    transform(valor: string, args: string[]): any {
        if (!valor) return valor;

        if (isNaN(Number(valor))) {
            var salario = Number(valor.replace(',','.'));
            var val = salario.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true });
        }
        else {
            var val = Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true });
        }

        return val;
    }
}
