import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './module/header/header.component';
import { ArticulosComponent } from './module/articulos/articulos.component';
import { RegistroClienteComponent } from './module/registro-cliente/registro-cliente.component';
import { Route, RouterModule } from '@angular/router';
import { ComprasComponent } from './module/compras/compras.component';

const routes : Route[] =[
  {path:'articulos', component: ArticulosComponent},
  {path:'registro-cliente', component: RegistroClienteComponent},
  {path:'compras', component: ComprasComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticulosComponent,
    RegistroClienteComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
