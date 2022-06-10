import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackapiService {

  constructor(private http:HttpClient) { }

  userlist(){
    return this.http.get(`http://localhost:1000/api/users`)
  }

  deleteuser(id:any){
    return this.http.delete(`http://localhost:1000/api/users/`+id)
  }
updateuser(id:any,data:any){
    return this.http.put(`http://localhost:1000/api/users/`+id,data)
}
adduser(data:any){
  return this.http.post(`http://localhost:1000/api/users/ajouter`,data)
}
forgetpass(data:any){
return this.http.post(`http://localhost:1000/api/users/password/forgot`,data)
}
resetpass(token:any,data:any){
  return this.http.put(`http://localhost:1000/api/users/password/reset/`+token,data)
}


gettimesheet(){
  return this.http.get(`http://localhost:1000/api/stylesheet/`)
}


deletetimesheet(id:any){
  return this.http.delete(`http://localhost:1000/api/stylesheet/`+id)
}


envoyee(data:any,id:any){
  return this.http.put(`http://localhost:1000/api/stylesheet/envoye/`+id,data)
}

}
