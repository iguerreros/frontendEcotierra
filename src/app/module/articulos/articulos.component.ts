import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public listaArticulo: any = [];
  public selectedCompras = {id:0,nombre:''}
  public listaClientes: any = [];
  public compras = {nombreArticulo:'',cantidad:0,precio:0,subtotal:0, igv:0,total:0,idCliente:0,idArticulo:0}
  public total = 0;
  constructor(private articulosService: ArticulosService ) { }

  ngOnInit(){
     this.listarArticulosRegistrados();
     this.listarCliente();
  }

  private listarArticulosRegistrados(){
      this.articulosService.listadoArticulos().subscribe(resp => {
           this.listaArticulo = resp.detalles;
      })
  }
  public listarCliente(){
    this.articulosService.listadoClientes().subscribe(resp => {
         this.listaClientes = resp.detalles;
    })
  }
  public obtenerUsuario(idUsuario){
        this.compras.idCliente = idUsuario;
  }

  private registrarCompra(id,nombrearticulo,precio){
      this.compras.idArticulo=id;
      this.compras.nombreArticulo = nombrearticulo;
      this.compras.precio = precio;
  }

  public calcularSubTotal(cantidad){
    this.compras.cantidad = cantidad;
    let subtotal = (this.compras.precio * cantidad);
    this.compras.subtotal = subtotal;
    //calcular el igv
    let calcular = subtotal/1.18;
    let igv = subtotal-calcular;
    let igv1 = igv.toFixed(2);
    this.compras.igv =  Number(igv1);
    //sumar el moto final
    let montototal = (Number(subtotal) + Number(igv1));
    this.compras.total = montototal;
  }

  public registrarCompraNueva(){

    let jsoninsert = {
      id_cliente:this.compras.idCliente,
      id_articulo:this.compras.idArticulo.toString(),
      subtotal:this.compras.subtotal.toString(),
      igv:this.compras.igv.toString(),
      total:this.compras.total.toString()
    }

    this.articulosService.guardarCompras(jsoninsert).subscribe(data =>{
      alert("Compra Guardado Correctamente");
    },error=>{
      alert("Ocurrío un error");
    })

  }

}
