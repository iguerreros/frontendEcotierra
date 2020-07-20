import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../services/articulos.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  public listaClientes: any = [];
  public clientesNuevos ={nombre:null,apellido:null,edad:null,fechanacimiento:null}
  constructor(private articulosService: ArticulosService ) { }

  ngOnInit() {
    this.listarCliente();
  }
   
  private listarCliente(){
    this.articulosService.listadoClientes().subscribe(resp => {
    
         this.listaClientes = resp.detalles;
    })
  }

  registrarCliente(){
    console.log("respuesta",this.clientesNuevos);
    let jsoninsert = {
      nombre:this.clientesNuevos.nombre,
      apellido:this.clientesNuevos.apellido,
      edad:this.clientesNuevos.edad,
      fechanacimiento:this.clientesNuevos.fechanacimiento
    }
    console.log("respuesta",jsoninsert);
    this.articulosService.insertarCliente(jsoninsert).subscribe(data =>{
      alert("Cliente Guardado Correctamente");
       console.log("respuesta",data);
       this.listarCliente();
    },error=>{
      alert("Ocurrío un error");
    })

  }
}
