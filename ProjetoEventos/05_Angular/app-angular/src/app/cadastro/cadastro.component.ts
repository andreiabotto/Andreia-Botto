import { Component } from '@angular/core';
import { IEvento } from './../interfaces/interface.evento';
@Component({
    templateUrl: 'views/cadastro.component.html'

})
export class CadastroComponent {
    //definindo um array de eventos

    public listaEventos: IEvento[] = [
        { descricao: 'Avaliação Angular', data: '2018-10-23', preco: 0 },
        { descricao: 'Formatura', data: '2020-05-02', preco: 140 },
        { descricao: 'Torneio de Tenis', data: '2018-07-10', preco: 210 },
        { descricao: 'Congresso de TI', data: '2019-01-16', preco: 400 }
    ];
} 
