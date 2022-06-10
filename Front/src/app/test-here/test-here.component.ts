import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiauthService } from 'src/app/_services/apiauth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-test-here',
  templateUrl: './test-here.component.html',
  styleUrls: ['./test-here.component.css']
})
export class TestHereComponent implements OnInit {
  datauser:any
  url:any
  constructor(private user:ApiauthService ,private toastrService:ToastrService, private route:Router,private aroute:ActivatedRoute,private messageService: MessageService) { }

  ngOnInit(): void {
    this.url=this.aroute.snapshot.queryParams['returnUrl'] || '/'
    if(!this.user.LoggedIn()){
      this.route.navigate(['/sign-in'])
    }

  }




  show(){
    Swal.fire(
      'Daka',
      '19.25',
      'success'
    )
    this.toastrService.success('Good evening !')
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
  }}

