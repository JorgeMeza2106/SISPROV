import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material';

import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProformaComponent } from './components/lista-proforma/lista-proforma.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    NavegacionComponent,
    FormProductoComponent,
    ListaProformaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
