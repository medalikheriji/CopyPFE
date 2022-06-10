import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/_services/apiauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {

  constructor(private authuser:ApiauthService,private route:Router) {

         }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem('usertoken')
    localStorage.removeItem('user')
    this.route.navigate(['sign-in'])
  }
}
