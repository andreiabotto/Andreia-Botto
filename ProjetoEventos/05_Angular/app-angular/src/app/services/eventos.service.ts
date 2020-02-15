import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/interface.evento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class EventosService {
    //acesso ao HTTP
    public constructor(private _http: HttpClient) { }
    url: string = "http://localhost:3200/eventos";

    public getEventosWS() {
        return this._http.get<IEvento[]>(this.url);
    }
    
    public getEventos(): IEvento[] {
        return [
            { descricao: 'Avaliação Angular', data: '2018-10-23', preco: 0 },
            { descricao: 'Formatura', data: '2020-05-02', preco: 140 },
            { descricao: 'Torneio de Tenis', data: '2018-07-10', preco: 210 },
            { descricao: 'Congresso de TI', data: '2019-01-16', preco: 400 }
        ];
    }

    public setEventoWS(evento: IEvento): Observable<IEvento> {
        return this._http.post<IEvento>(this.url, evento);
    }
}