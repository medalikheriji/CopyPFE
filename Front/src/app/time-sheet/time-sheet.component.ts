import { BackapiService } from './../_services/backapi.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})
export class TimeSheetComponent implements OnInit {
aff:Boolean = false
hide:Boolean = true
timesheet:any
datarray:any=[]
  constructor(private modalService: NgbModal,private route:Router,private api:BackapiService) {
    this.api.gettimesheet().subscribe(data => this.timesheet=data)  }

  ngOnInit(): void {
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  openXl(content : any) {
    this.modalService.open(content, { size: 'xl' });
  }
  show(){
this.aff=!this.aff
this.hide=!this.hide

  }
goto()
{
  this.route.navigate(['/test-here'])
}

add(e:any){

    this.datarray.push(e)
}


delete(){
  for (var i = 0; i < this.datarray.length; i++) {
    this.api.deletetimesheet(this.datarray[i]._id).subscribe(data => {
      this.timesheet.splice(i,1)
      })
  }
  }

change(){
  let data ="Envoyé"
  for (var i = 0; i < this.datarray.length; i++) {
    this.api.envoyee(data,this.datarray[i]._id).subscribe(data => {
      location.reload();
    })
  }
}



}
