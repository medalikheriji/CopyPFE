import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../_models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url = 'http://localhost:8000/clients/';
  constructor(private http : HttpClient) { }

  findAllClients(): Observable<any>{
    return this.http.get(this.url);
  }
  
  deleteClient(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  addClient(client : Client) : Observable<any>{
    return this.http.post(this.url , client );
  }

  findClient(id:string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editClient(id:string,client:Client):Observable<any>{
    return this.http.put(this.url + id , client);
  }




}
