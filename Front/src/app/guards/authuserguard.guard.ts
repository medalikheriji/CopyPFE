import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiauthService } from '../_services/apiauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthuserguardGuard implements CanActivate {
  constructor(private auth:ApiauthService , private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
      if (this.auth.LoggedIn()==true){
        resolve(true)
      }
      else {
        this.route.navigate(['/sign-in'],{queryParams:{returnUrl:state.url}})
        resolve(false)
      }
    })
  }
  
}
