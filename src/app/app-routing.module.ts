import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista-producto',
    pathMatch: 'full'
  },
  {
    path: 'lista-producto',
    component: ListaProductoComponent
  },
  {
    path: 'form-producto',
    component: FormProductoComponent
  },
  {
    path: 'form-producto/:id',
    component: FormProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
