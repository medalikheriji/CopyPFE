import { BackapiService } from './../_services/backapi.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time-sheet2',
  templateUrl: './time-sheet2.component.html',
  styleUrls: ['./time-sheet2.component.css']
})
export class TimeSheet2Component implements OnInit {

  feuill:any
  datarraydetail={
    date_deb :"",
    date_fin:"",
    ajouter_par:"",
    matricule:""
}

aff:Boolean = false
hide:Boolean = true
timesheet:any


allweek:any=[]
today:any
lignes:any=[]
hoursperday:any=[]
nbh=0
totalline=0
  constructor(private modalService: NgbModal,private route:Router,private api:BackapiService) {
    this.api.gettimesheet().subscribe(data => this.timesheet=data)

}

  ngOnInit(): void {
    this.api.gettimesheet().subscribe(data => this.feuill=data)

  }

  getdate(date:Date){
    this.today=new Date(date)
    this.today=this.today.getDate()
    moment(date).format('llll')
    console.log(this.today)
for (let i=0 ; i<=6;i++){
  const day = this.today+i
  this.allweek.push(day)}

      }


      addligne(f:NgForm){
         let i=0
         const hoursperday=[]
         for (i=0;i<=this.allweek.length-1;i++){
          let day = {day: 'day'+i};
          let nbh = {nbh: 0};
          let days = Object.assign(day,nbh);
           hoursperday.push(days)
         }
         const ligne= f.value
       this.lignes.push(Object.assign(ligne,hoursperday))
         console.log(this.lignes)
         console.log(hoursperday)
return this.nbh
      }

      heures(i:number,heure:any,j:number){
        this.lignes[j][i].nbh=heure.value

      }

calcultotalperline(j:number){
  let i
   let totalline=0
 for(i=0;i<=6;i++){
      totalline+=this.lignes[j][i].nbh
 }
 return totalline
}





// week(i:number){
//   this.allweek.push(this.today)
// for (i=1 ; i<=7;i++){
//   const day = this.today.getDate()+1
//   this.allweek.push(day)
// }

// }

  displayStyle = "none";

  openPopup()
  {
    this.displayStyle = "block";
  }

  closePopup()
  {
    this.displayStyle = "none";
  }

  openXl(content : any)
  {
    this.modalService.open(content, { size: 'xl' });
  }

  show()
  {
    this.aff=!this.aff
    this.hide=!this.hide
  }

goto()
{
  this.route.navigate(['/test-here'])
}




  send(){
    const date_deb=new Date(this.today)
    const date_fin=new Date(this.today)
    const date_envoi=new Date(this.today)
    const ajouter_par="karim"
    const matricule="qsdqsd"
    const ligne=this.lignes
    const arrayA :any={date_deb,date_fin,date_envoi,ajouter_par,matricule,ligne}
  this.api.AddFeuill(arrayA).subscribe(data => {console.log(arrayA)
    console.log(data)  })

  }




}
