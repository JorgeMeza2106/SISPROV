import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URI = 'https://sisprov-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Producto[]>(`${this.API_URI}/producto/listar`);
  }

  registrar(producto: Producto) {
    return this.http.post(`${this.API_URI}/producto/registrar`, producto);
  }

  actualizar(producto: Producto) {
    return this.http.put(`${this.API_URI}/producto/actualizar`, producto);
  }

  buscar(id_prod: number) {
    return this.http.get<Producto>(`${this.API_URI}/producto/buscar/${id_prod}`);
  }

}
