import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/model/Producto';
import { Categoria } from 'src/app/model/Categoria';

import { CategoriaService } from '../../services/categoria.service';
import { ProductoRegistro } from 'src/app/model/ProductoRegistro';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto: ProductoRegistro = {
    id_prod: 0,
    nombre: '',
    descrip: '',
    categoria: {
      id_cat: 0,
      nombre: '',
      descrip: ''
    },
    stock: 0,
    precio: 0,
    img: ''
  };

  editFlag: boolean = false;

  @HostBinding('class') classes = 'row';
  categorias: Categoria[] = []

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriaService.listar().subscribe(
      res => {
        this.categorias = res;
        console.log(this.categorias);
      },
      err => {
        console.log(err)
      }
    )

    const params = this.activedRoute.snapshot.params;
    console.log(params.id);
    if(params.id){
      this.editFlag = true;
      this.productoService.buscar(params.id).subscribe(
        res => {
          console.log(res);
          this.producto = res;
        }
      )
    }
  }

  btnSubmit(){
    console.log(this.producto);
    if(this.editFlag){
      this.productoService.actualizar(this.producto).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['lista-producto']);
        },
        err => {
          console.log(err)
        }
      )
    }else{
      this.productoService.registrar(this.producto).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['lista-producto']);
        },
        err => {
          console.log(err)
        }
      )
    }
    
  }

}
