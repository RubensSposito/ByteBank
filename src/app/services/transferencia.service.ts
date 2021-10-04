import { Transferencia } from './../model/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTranferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private HttpClient: HttpClient) {
    this.listaTranferencia = [];
  }

  get transferencias() {
    return this.listaTranferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.HttpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);

    return this.HttpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
