import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { BackapiService } from '../_services/backapi.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
users:any
userdetail={
firstname:"",
lastname:"",
matricule:"",
email:"",
phonenum:"",
pays:"",
id:""
}
i=0
checklist:any;
checkedList:any;
users_id:any=[]

  constructor(private api:BackapiService,private modalService: NgbModal) {
    this.api.userlist().subscribe(data => this.users=data
   )
   console.log(this.users)
   }

  ngOnInit(): void {
  }
  openXl(content : any) {
    this.modalService.open(content, { size: 'xl' })

  }

  getdata(firstname:string,lastname:string,matricule:any,email:string,phonenum:any,pays:string,etat:any,id:any){
this.userdetail.firstname=firstname
this.userdetail.lastname=lastname
this.userdetail.matricule=matricule
this.userdetail.email=email
this.userdetail.phonenum=phonenum
this.userdetail.pays=pays
this.userdetail.id=id
  }

  delete(i:any,id:any){
this.api.deleteuser(id).subscribe(data => {
  this.users.splice(i,1)
  console.log(data)})
  }

  updateuser(f:NgForm){
   let data = f.value
   this.api.updateuser(this.userdetail.id,data).subscribe(data =>{
      this.api.userlist().subscribe(data => this.users=data)
     })
  }

 // Get List of Checked Items
//  getCheckedItemList(){
//   this.checkedList = [];
//   for (var i = 0; i < this.checklist.length; i++) {
//     if(this.checklist[i].isSelected)
//     this.checkedList.push(this.checklist[i]);
//   }
//   this.checkedList = JSON.stringify(this.checkedList);
// }

onchange(user:any){
  if(user.isselected === true){
    this.users_id.push(user)
  this.i=this.i+1}
    else{
      this.users_id.splice(1)
      this.i=this.i-1
    }
    console.log(this.users_id)

}

deleteusers(){
  for (var i = 0; i < this.users_id.length; i++) {
    if(this.users_id[i].isselected)
    this.api.deleteuser(this.users_id[i]._id).subscribe(data => {
      this.users.splice(i,1)
      this.users_id.splice(i,1)
      console.log(this.users_id)})
  }
}


  adduser(f:NgForm){
    let data = f.value
    this.api.adduser(data).subscribe(data => {this.users.push(data)

      this.api.userlist().subscribe(data => this.users=data)})
    }



}
