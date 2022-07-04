import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url = 'http://localhost:1000/projects/';
  constructor(private http : HttpClient) { }

  findAllProjects(): Observable<any>{
    return this.http.get(this.url);
  }
  
  deleteProject(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  addProject(project : Project) : Observable<any>{
    return this.http.post(this.url , project );
  }

  findProject(id:string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editProject(id:string,project:Project):Observable<any>{
    return this.http.put(this.url + id , project);
  }

  editProjectByState(id:string,project:Project):Observable<any>{
    return this.http.put( this.url + "updateState/"  + id , project);
  }

  // findAllUsers(): Observable<any>{
  //   this.url = 'http://localhost:1000/api/users/';
  //   return this.http.get(this.url);
  // }

}
