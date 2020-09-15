import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { Producto } from 'src/app/model/Producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];
  displayedColumns: string[] = ['id_prod', 'nombre', 'descrip', 'nomb_cat','precio', 'stock','action'];
  dataSource = new MatTableDataSource(this.productos);
  noDataProducto: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor( 
    private productoService: ProductoService,
    public activedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerProductos() {
    this.productoService.listar().subscribe(
      res => {
        console.log(res);
        if (res == null) {
          this.noDataProducto = true;
        }else{
          this.productos = res;
        }
        this.dataSource = new MatTableDataSource(this.productos);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    );
  }

  btnEditar(producto){
    console.log(producto);
    var url = '/form-producto/'+producto.id_prod;
    this.router.navigate([url]);
  }

  btnBorrar(producto){
    console.log(producto);
  }

  btnAgregar(){
    console.log('prueba');
    var url = '/form-producto';
    this.router.navigate([url]);
  }

}
