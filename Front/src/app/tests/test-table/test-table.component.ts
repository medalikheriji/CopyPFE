import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {

  // membersList: Array<{Id: string, firstName: string, lastName:string,email:string,mobile:string,salary:string}> = [
  //   {Id: "1", firstName: "Mahwechi", lastName:"Karim",email:"mahwechikarim@gmail.com",mobile:"22287444",salary:"1000"},
  //   {Id: "2", firstName: "Ben Romdhane", lastName:"Mohamed",email:"benromdhanemohamed@gmail.com",mobile:"58209788",salary:"1200"},
  //   {Id: "3", firstName: "Soujel", lastName:"Ahmed",email:"ahmedsoujel45@gmail.com",mobile:"97856201",salary:"800"},
  //   {Id: "4", firstName: "Ouerheni", lastName:"Yosr",email:"yosrmefteh@gmail.com",mobile:"28963215",salary:"2000"},
  //   {Id: "5", firstName: "Sallemi", lastName:"Salwen",email:"salwensallemi@gmail.com",mobile:"54269874",salary:"1700"}
  // ]
  members = [
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"}
  ]
  membersList: Array<{id: string , date: string, description: string, categorie:string,ville:string,noteFrais:string,montant:string,aRembourser:boolean,tva:string,etat:string}> = [
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"}
  ]

  firstName : string ="";
  categorie : string ="";
  p : number = 1;
  key : string ='id';
  reverse : boolean = false;


  constructor() {}

  ngOnInit(): void {
    // this.membersList = [
    //   {Id: "1", firstName: "Mahwechi", lastName:"Karim",email:"mahwechikarim@gmail.com",mobile:"22287444",salary:"1000"},
    //   {Id: "2", firstName: "Ben Romdhane", lastName:"Mohamed",email:"benromdhanemohamed@gmail.com",mobile:"58209788",salary:"1200"},
    //   {Id: "3", firstName: "Soujel", lastName:"Ahmed",email:"ahmedsoujel45@gmail.com",mobile:"97856201",salary:"800"},
    //   {Id: "4", firstName: "Ouerheni", lastName:"Yosr",email:"yosrmefteh@gmail.com",mobile:"28963215",salary:"2000"},
    //   {Id: "5", firstName: "Sallemi", lastName:"Salwen",email:"salwensallemi@gmail.com",mobile:"54269874",salary:"1700"}
    // ]
    this.membersList = this.members;
    /** */
  }

  Search(){
    if (this.categorie==''){
      this.ngOnInit()
    }else{this.membersList = this.membersList.filter(res => {
      return res.categorie.toLocaleLowerCase().match(this.categorie.toLocaleLowerCase());
    })}
  } 
  
  sortField(key:any){
    this.key = key ;
    this.reverse = !this.reverse;
  }
  

}
