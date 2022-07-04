import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  url = 'http://localhost:1000/api/users/';
  constructor(private http : HttpClient) { }

  findAllUsers(): Observable<any>{
    return this.http.get(this.url);
  }
  
  deleteUsers(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }


}
