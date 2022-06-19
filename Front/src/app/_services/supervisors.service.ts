import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supervisor } from '../_models/supervisor';

@Injectable({
  providedIn: 'root'
})
export class SupervisorsService {

  url = 'http://localhost:8000/supervisors/';
  constructor(private http : HttpClient) { }

  findAllSuper(): Observable<any>{
    return this.http.get(this.url);
  }
  
  deleteSuper(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  addSuper(superv : Supervisor) : Observable<any>{
    return this.http.post(this.url , superv );
  }

  findSuper(id:string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editSuper(id:string,superv:Supervisor):Observable<any>{
    return this.http.put(this.url + id , superv);
  }


}
