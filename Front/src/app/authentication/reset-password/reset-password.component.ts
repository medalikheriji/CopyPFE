import { ActivatedRoute, Router } from '@angular/router';
import { BackapiService } from './../../_services/backapi.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
token:any
  constructor(private http:BackapiService , private aroute:ActivatedRoute, private route:Router) {
    this.aroute.params.subscribe(data => this.token=data)
   this.token=this.token.id
  }

  ngOnInit(): void {
  }
resetpw(f:NgForm){

  let data=f.value
console.log(data.password)
  if(data.password === data.confirmpass){
this.http.resetpass(this.token,data).subscribe(data => this.route.navigate(['/sign-in']))
  }

}
}
