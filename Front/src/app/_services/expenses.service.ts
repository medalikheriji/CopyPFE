import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frais } from '../_models/frais';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  url = 'http://localhost:1000/frais/';
  constructor(private http : HttpClient) { }

  findAllFrais(): Observable<any>{
    return this.http.get(this.url);
  }
  
  deleteFrais(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  addFrais(frais : Frais) : Observable<any>{
    return this.http.post(this.url , frais );
  }

  findFrais(id:string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editFrais(id:string,frais:Frais):Observable<any>{
    return this.http.put(this.url + id , frais);
  }
  
}
