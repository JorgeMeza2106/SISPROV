import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ProformaService } from '../../services/proforma.service'

@Component({
  selector: 'app-lista-proforma',
  templateUrl: './lista-proforma.component.html',
  styleUrls: ['./lista-proforma.component.css']
})
export class ListaProformaComponent implements OnInit {

  proformas: any[] = [];
  displayedColumns: string[] = ['idProforma', 'cliente', 'fecha', 'montoTotal'];
  dataSource = new MatTableDataSource(this.proformas);
  noDataProforma: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private proformaService: ProformaService) { }

  ngOnInit(): void {
    this.obtenerProformas();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerProformas() {
    this.proformaService.listar().subscribe(
      res => {
        console.log(res);
        if (res == null) {
          this.noDataProforma = true;
        }else{
          this.proformas = res;
        }
        this.dataSource = new MatTableDataSource(this.proformas);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    );
  }


}
