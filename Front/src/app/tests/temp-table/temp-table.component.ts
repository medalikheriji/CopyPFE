// import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-temp-table',
  templateUrl: './temp-table.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    
/** */
.ngx-pagination {
    padding-left: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#112B3C;
}
/**  .btn-info  */
.ngx-pagination .current {
    background:  #2a73e8 !important;
    border: transparent !important;
    border-radius: 20px !important;
}

.ngx-pagination .current:hover {
    background:  #2a73e8 !important;
    border-radius: 20px !important; 
    border: transparent !important;
}

/** */

.card-body {
    color: #2a73e8;
    font-weight: bold;
    font-family: "Manrope" sans-serif;
    font-size: 16px;
  }
  .line {
    content: "";
    background-color: #2a73e8;
    font-weight: bolder;
  
    height: 0.3em;
    width: 5.2em;
    border-radius: 8px;
  }
  
  .line2 {
    content: "";
    background-color: #2a73e8;
    font-weight: bolder;
    height: 2.5em;
    width: 0.8em;
    margin-top: 25px;
    margin-left: 10px;
    border-radius: 8px;
  }
  
  #visualTS {
    color: black;
  }
  
  #profileColl {
    font-size: 13px;
    color: black;
    font-weight: bold;
    padding-left: 5px;
    padding-top: 5px;
  }
  
  .rounded-circle {
    width: 35px;
    margin-left: 10px;
    margin-bottom: 12px;
  }
  
  .card-content1 {
    background-color: #ededed;
    border-radius: 35px;
  }
  
  .card-content2 {
    background-color: #ededed;
    border-radius: 15px;
    height: auto;
  }
  
  #nameCollab {
    color: #0d0a0a;
    font-size: 24px;
  }
  
  #roleCollab {
    color: #0d0a0a;
    font-size: small;
    margin-left: 15px;
    margin-top: -5px;
  }
  
  #parDefaut {
    font-weight: 700;
    font-size: 11px;
    margin-top: 10px;
    margin-left: 15px;
  }
  
  .dropCollab {
    margin-left: 15em;
  }
  
  .selectCollab {
    border-radius: 8px;
    width: 15em;
  }
  
  #collabSelect {
    border-radius: 33px;
    border-right-color: black;
    border-bottom-color: black;
    background-color: transparent;
  }
  
  .btn-ajouterFeuille {
    border-radius: 12px;
    background-color: #2a73e8;
    position: absolute;
    transform: translateX(100%);
  }
  
  .btn-ajoutFeuille {
    position: absolute;
    right: 50px;
  }
  
  .btn-ajoutFeuille button {
    border-radius: 10px;
    background-color: #2a73e8;
    padding-left: 0.5cm;
    padding-right: 0.5cm;
    padding-top: 0.1cm;
    padding-bottom: 0.1cm;
  }
  
  #input-group-1 {
    background-color: transparent;
    padding-top: 10px;
    padding-left: 30px;
    height: 50px;
  }
  
  #form-control {
    border-radius: 0px 10px 10px 0px;
    border-left-color: transparent;
  }
  
  #basic-addon1 {
    background-color: transparent;
    border-radius: 10px 0px 0px 10px;
    border-right-color: transparent;
  }
  
  .btn-ajouterFeuille {
    border-radius: 10px;
    background-color: #2a73e8;
    position: absolute;
    transform: translateX(100%);
  }
  
  .btn-filtre button {
    border-radius: 10px;
    background-color: #2a73e8;
    padding-left: 0.5cm;
    padding-right: 0.5cm;
    padding-top: 0.1cm;
    padding-bottom: 0.1cm;
    position: absolute;
    width: 150px;
  }
  
  #btn-filtre {
    border-radius: 10px;
    background-color: #2a73e8;
    padding-left: 0.5cm;
    padding-right: 0.5cm;
    padding-top: 0.1cm;
    padding-bottom: 0.1cm;
    position: absolute;
    width: 150px;
  }
  
  
  
  
  
  #button_periode {
    border-radius: 10px;
    background-color: white;
    color: gray;
    height: 30px;
    width: 395px;
    margin-left: 30px;
    margin-top: -30px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  #button_facturable {
    border-radius: 10px;
    background-color: white;
    color: gray;
    height: 30px;
    width: 340px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 15px;
    margin-top: -30px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  #button_statut {
    border-radius: 10px;
    background-color: white;
    color: gray;
    height: 30px;
    width: 200px;
    margin-left: 15px;
    margin-top: -30px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  #button_heures {
    border-radius: 10px;
    background-color: white;
    color: gray;
    height: 30px;
    width: 200px;
    margin-left: 15px;
    margin-top: -30px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  #button_sites {
    border-radius: 10px;
    background-color: white;
    color: gray;
    height: 30px;
    width: 180px;
    margin-left: 15px;
    margin-top: -30px;
    margin-bottom: 10px;
    margin-right: 180px;
    font-size: 14px;
  }
  
  .card-content3 {
    background-color: #ededed;
    border-radius: 15px;
  }
  
  .filtres_buttons {
    margin-top: 30px;
  }
  
  .btn-modif button {
    border-radius: 10px;
    background-color: #2a73e8;
    padding-left: 0.5cm;
    padding-right: 0.5cm;
    position: relative;
    width: 135px;
    font-size: 13px;
  }
  
  .btn-supp button {
    border-radius: 10px;
    background-color: lightgray;
  
    position: relative;
    width: 115px;
  
    color: #0d0a0a;
    font-size: 13px;
  }
  
  .btn-envoy button {
    border-radius: 10px;
    background-color: #2a73e8;
  
    position: relative;
    width: 105px;
  
    font-size: 13px;
  }
  
  .btn-impr button {
    background-color: white;
    border-radius: 10px;
    padding-left: 0.5cm;
    padding-right: 0.5cm;
    position: relative;
    width: 120px;
    color: #0d0a0a;
    font-size: 13px;
  }
  
  
  
  .selector{
   display:flex;
   flex-direction:column;
   background:#fff;
   border:2px solid#3b8add;
   border-radius:20px;
   max-width:300px;
   width:100%;
  }
  .selector_body {
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    
  }
  .selector_item {
    display: block;
    width: 100%;
  
  }
  .selector_item:not(:last-child) {
    margin-top: 1px;
    padding-bottom: 1px;
    
  }
  
  
  
  
  #label_att p{
    font-weight: bold;
    padding-top: 4px;
    height: 20px;
    font-size: 12px;
  }
  
  .selector_label{
    position:relative;
    width:100%;
    padding:2px;
    font-weight:500;
    font-size:12px;
    color:#000;
    background:#fff;
    border:1px solid #a5b8d7;
    border-radius:20px;
   }
  
  
  
  
  .modal-body .input-group .form-control{
    border-top-left-radius: 8px  ;
  }
  
  .modal-footer{
    background-color: lightskyblue;
  }
  
  #flexRadioDefault1{
    margin-left: 15px;
    margin-top: 10px;
    width: 13px;
    height: 13px;
  }
  
  
  #flexRadioDefault1:after {
  
      appearance: none;
      border-radius: 50%;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: white;
      display: inline-block;
      visibility: visible;
      border: 2px solid white;
  }
  #flexRadioDefault1:checked:after {
      border-radius: 25px;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: #2a73e8;
      display: inline-block;
      visibility: visible;
      border: 2px solid #2a73e8;
  }
  
  #flexRadioDefault2{
    margin-left: 15px;
    margin-top: 10px;
    width: 13px;
    height: 13px;
  }
  
  #flexRadioDefault2:after {
    appearance: none;
    border-radius: 50%;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: gray;
    display: inline-block;
    visibility: visible;
    border: 2px solid lightgray;
  }
  #flexRadioDefault2:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 25px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #2a73e8;
    display: inline-block;
    visibility: visible;
    border: 2px solid #2a73e8;
  }
  

  `]
})
export class TempTableComponent implements OnInit {

  timesheetCopy : Array<{id: string , nameProject: string, descProject: string, createdAtProject:string,expiredAtProject:string,deadlineProject:string,stateOfProject:string,priorityOfProject:string}> = [
    {id : "1", nameProject: "Projet n°1", descProject: "Description n°1 ", createdAtProject:"20/01/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
    {id : "2", nameProject: "Projet n°2", descProject: "Description n°2 ", createdAtProject:"17/02/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"élevé"},
    {id : "3", nameProject: "Projet n°3", descProject: "Description n°3 ", createdAtProject:"05/10/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"élevé"},
    {id : "4", nameProject: "Projet n°4", descProject: "Description n°4 ", createdAtProject:"19/12/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
    {id : "5", nameProject: "Projet n°5", descProject: "Description n°5 ", createdAtProject:"01/04/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"normale"}
  ]
  timesheet = [
    {id : "1", nameProject: "Projet n°1", descProject: "Description n°1 ", createdAtProject:"20/01/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
    {id : "2", nameProject: "Projet n°2", descProject: "Description n°2 ", createdAtProject:"17/02/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"élevé"},
    {id : "3", nameProject: "Projet n°3", descProject: "Description n°3 ", createdAtProject:"05/10/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"élevé"},
    {id : "4", nameProject: "Projet n°4", descProject: "Description n°4 ", createdAtProject:"19/12/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
    {id : "5", nameProject: "Projet n°5", descProject: "Description n°5 ", createdAtProject:"01/04/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"noramle"}
  ]

  firstName : string ="";
  searchField : string ="";
  p : number = 1;
  key : string ='id';
  reverse : boolean = false;

  dataSource !: MatTableDataSource<any>;
  constructor() { }

  ngOnInit(): void {
    this.timesheet = this.timesheetCopy;
    this.dataSource = new MatTableDataSource(this.timesheet);
  }

  displayedColumns: string[] = ['Id', 'Nom du projet', 'Description', 'Crée le ','Statu','Priorité'];

  

}
