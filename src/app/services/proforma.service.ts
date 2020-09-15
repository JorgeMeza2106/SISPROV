import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProformaService {
  API_URI = 'https://sisprov-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.API_URI}/proforma/listar`);
  }
}
