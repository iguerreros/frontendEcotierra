import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

	constructor(private http:HttpClient ) { }

	listadoArticulos(): Observable<any>{
		return this.http.get<any>('/api/ListaArticulos');
	}

	listadoClientes(): Observable<any>{
		return this.http.get<any>('/api/listaCliente');
	}
	public insertarCliente(data){

		return this.http.post('/api/listaCliente',data);
	}

	public obtenerCompra(parameters): Observable<any> {
		/*let queryParams: URLSearchParams = new URLSearchParams();
	
		if (_params.id_cliente) {
		  queryParams.append("id_cliente", _params.id_cliente);
		}*/

	    let params = new HttpParams();
		params: new HttpParams().append('id_cliente', "1");

		return this.http.get<any>('/api/compras?id_cliente='+parameters);
	}
	
	public guardarCompras(data){

		return this.http.post('/api/compras',data);
	}
}
