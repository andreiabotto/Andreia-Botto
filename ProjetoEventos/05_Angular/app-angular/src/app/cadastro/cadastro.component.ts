import { Component, NgModule } from '@angular/core';
import { IEvento } from './../interfaces/interface.evento';
import { log } from 'util';
import { EventosService } from '../services/eventos.service';



@Component({
    templateUrl: './cadastro.component.html'

})




export class CadastroComponent {

    public eventoSelecionado: IEvento;
    private novoEvento: IEvento;


    //para a inclusão de um novo evento
    public novo() {
        this.novoEvento = { descricao: '', data: '', preco: 0 }
        this.eventoSelecionado = this.novoEvento;
    }
    public incluir(evento: IEvento) {
        //this.listaEventos.push(evento);
        this.eventosService.setEventoWS(evento)
            .subscribe(res => JSON.stringify(res),
                error => alert(error),
                () => this.listar());
        alert('Evento incluído com sucesso');
    }

    public selecionar(item: IEvento): void {
        this.eventoSelecionado = item;
    }

    //lista de eventos
    public listaEventos: IEvento[];
    constructor(private eventosService: EventosService) {
        //this.listaEventos = eventosService.getEventos();
        this.listar();
    }
    public listar(): void {
        this.eventosService.getEventosWS()
            .subscribe(res => this.listaEventos = res);
    }



}


