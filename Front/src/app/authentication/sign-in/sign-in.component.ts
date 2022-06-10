import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiauthService } from 'src/app/_services/apiauth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
datauser:any
url:any
  constructor(private user:ApiauthService ,private route:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.url=this.aroute.snapshot.queryParams['returnUrl'] || '/'
    if(this.user.LoggedIn()){
      this.route.navigate(['/e'])
    }
  }

  logi(form:NgForm)
  {
    let data = form.value
    console.log(data)
this.user.login(data).subscribe(resp => {
  this.datauser=resp
  this.user.savedata(this.datauser)
  this.route.navigate([this.url])
})

  }

}
