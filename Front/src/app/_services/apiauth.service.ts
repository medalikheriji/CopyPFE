import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class ApiauthService {

  helper = new JwtHelperService()

  constructor(private http:HttpClient) {


  }


  register(data:any){
    return this.http.post(`http://localhost:1000/api/users`,data)
  }

  login(data:any){
    return this.http.post("http://localhost:1000/api/users/login",data)
  }

  savedata(data:any){
    localStorage.setItem('usertoken',data.token)
    localStorage.setItem('user',JSON.stringify(data.user))
  }



  LoggedIn(){
  let token:any = localStorage.getItem('usertoken')
  if(!token){
    return false
  }
  if(this.helper.isTokenExpired(token)){
    return false
  }
  return true}

}
