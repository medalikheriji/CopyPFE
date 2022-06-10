import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiauthService} from 'src/app/_services/apiauth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private user:ApiauthService) { }

  ngOnInit(): void {
    
  }

  register(form:NgForm){
    let data = form.value
    console.log(data)
this.user.register(data).subscribe(resp => console.log('done'))

  }
}
