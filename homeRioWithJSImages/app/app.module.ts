import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { HttpModule }            from '@angular/http';
import { AppComponent }          from './app.component';
import { InMemoryWebApiModule }  from 'angular2-in-memory-web-api';
import { InMemoryDataService }   from './in-memory-data.service';
import {ListaDeUsuariosComponent} from "./lista-de-usuarios.component";
import {CpfPipe} from "./cpf.pipe";
import {ValorMonetarioPipe} from "./valor-monetario.pipe";

@NgModule({
    imports:      [ BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
    declarations: [ AppComponent, ListaDeUsuariosComponent, CpfPipe, ValorMonetarioPipe ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
