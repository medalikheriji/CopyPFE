import { Router } from '@angular/router';
import { BackapiService } from './../../_services/backapi.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private http:BackapiService,private route:Router) { }

  ngOnInit(): void {
  }
resetpass(f:NgForm){
let mail = f.value
this.http.forgetpass(mail).subscribe(data => console.log(data))
this.route.navigate(['/sign-in'])

}
}
