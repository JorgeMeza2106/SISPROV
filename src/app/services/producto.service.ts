import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../model/Producto';
import { ProductoRegistro } from '../model/ProductoRegistro';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  API_URI = 'https://sisprov-backend.herokuapp.com/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.API_URI}/producto/listar`);
  }

  registrar(producto: any) {
    return this.http.post(`${this.API_URI}/producto/registrar`, producto);
  }

  actualizar(producto: any) {
    return this.http.put(`${this.API_URI}/producto/actualizar`, producto);
  }

  buscar(id_prod: number) {
    return this.http.get<ProductoRegistro>(`${this.API_URI}/producto/buscar/${id_prod}`);
  }

  formatoProductoModel(producto: any): Producto {
    var prod:  Producto = {
      codigo : producto.id_prod,
      nombre : producto.nombre,
      descripcion : producto.descrip,
      id_cat : producto.categoria.id_cat,
      nomb_cat : producto.categoria.nombre,
      descrip_cat : producto.categoria.descrip,
      stock : producto.stock,
      precio : producto.precio,
      img : producto.img
    };

    return prod;
  }
}
