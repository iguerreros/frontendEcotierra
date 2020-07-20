import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  public selectedCompras = {id:0,nombre:''}
  public listaClientes: any = [];
  public listaCompraCliente: any = [];
  public mensajesValidacion: boolean = false;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.listarCliente();
    this.obtenerUsuario(1);
  }

  public listarCliente(){
    this.articulosService.listadoClientes().subscribe(resp => {
         this.listaClientes = resp.detalles;
    })
  }
  
  public obtenerUsuario(value){

    this.mensajesValidacion = false;
    this.articulosService.obtenerCompra(value).subscribe(resp => {

      if(resp.total_registros != 0){
        this.listaCompraCliente = resp.detalles;
      }else{
        this.listaCompraCliente =resp.detalles;
        this.mensajesValidacion = true;
      }
    
   })
 
 }


}
