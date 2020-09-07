import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  API_URI = 'https://sisprov-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }
  
  listar() {
    return this.http.get<Categoria[]>(`${this.API_URI}/categoria/listar`);
  }
}
