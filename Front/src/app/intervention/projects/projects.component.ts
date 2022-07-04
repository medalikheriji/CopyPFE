import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from 'src/app/_services/projects.service';
import { Project } from 'src/app/_models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { ClientsService } from 'src/app/_services/clients.service';
import { Client } from 'src/app/_models/client';
import { User } from 'src/app/_models/user';
import { UsersService } from 'src/app/_services/users.service';
// import {MatSort, Sort} from '@angular/material/sort';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  // styleUrls: ['./projects.component.css']
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
    .badge {
      border-radius:12px;
    }
    table #albums 
    {
    border-collapse:separate;
    border-spacing:0 1rm;
    }
    #container{
      display : flex ;
      background-color:bisque;
      align-content:center;
      justify-content:center;
      display:inline-block;
    }

    #container div {
      background-color:white;
      align-items: center ;
      margin:5px;
      padding:5px;
      width:100%;
      border-right: double;
      display:inline-block;
    }
    .card-header{
      background-color:white;
      margin-left:30px;
      margin-right:30px;
      width:80%;
      display:inline-block;
    }
    *{
    /* font-family: 'Sofia Pro', sans-serif;  */
    font-family: 'Manrope';
    }

    /** */
    .ngx-pagination {
    padding-left: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    /**  .btn-info  */
    .ngx-pagination .current {
      background: #48dbfb !important;
      border: transparent !important;
      border-radius: 20px !important;
    }

    .ngx-pagination .current:hover {
      background: #48dbfb !important;
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

  .mat-header-cell {
    background-color: #EEEEEE;
    font-size:14px;
  }

  .swal2-title {
    margin: 0px;
    font-size: 10px;
    font-family: 'Manrope';
  }

  .swal2-text {
    background-color: #FEFAE3;
    text-align: center;
    color: #61534e;
    font-family: 'Manrope';
  }

  .swal2-popup {
    font-size: 12px !important;
    font-family: 'Manrope';
  }

  `]
})
export class ProjectsComponent implements OnInit {

  minDate : Date = new Date();
  // membersList: Array<{Id: string, firstName: string, lastName:string,email:string,mobile:string,salary:string}> = [
  //   {Id: "1", firstName: "Mahwechi", lastName:"Karim",email:"mahwechikarim@gmail.com",mobile:"22287444",salary:"1000"},
  //   {Id: "2", firstName: "Ben Romdhane", lastName:"Mohamed",email:"benromdhanemohamed@gmail.com",mobile:"58209788",salary:"1200"},
  //   {Id: "3", firstName: "Soujel", lastName:"Ahmed",email:"ahmedsoujel45@gmail.com",mobile:"97856201",salary:"800"},
  //   {Id: "4", firstName: "Ouerheni", lastName:"Yosr",email:"yosrmefteh@gmail.com",mobile:"28963215",salary:"2000"},
  //   {Id: "5", firstName: "Sallemi", lastName:"Salwen",email:"salwensallemi@gmail.com",mobile:"54269874",salary:"1700"}
  // ]
  // projects = [
  //   {id : "1", nameProject: "Projet n°1", descProject: "Description n°1 ", createdAtProject:"20/01/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
  //   {id : "2", nameProject: "Projet n°2", descProject: "Description n°2 ", createdAtProject:"17/02/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"élevé"},
  //   {id : "3", nameProject: "Projet n°3", descProject: "Description n°3 ", createdAtProject:"05/10/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"élevé"},
  //   {id : "4", nameProject: "Projet n°4", descProject: "Description n°4 ", createdAtProject:"19/12/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
  //   {id : "5", nameProject: "Projet n°5", descProject: "Description n°5 ", createdAtProject:"01/04/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"noramle"}

  // ]
  // projectsList1: Array<{id: string , nameProject: string, descProject: string, createdAtProject:string,expiredAtProject:string,deadlineProject:string,stateOfProject:string,priorityOfProject:string}> = [
  //   {id : "1", nameProject: "Projet n°1", descProject: "Description n°1 ", createdAtProject:"20/01/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
  //   {id : "2", nameProject: "Projet n°2", descProject: "Description n°2 ", createdAtProject:"17/02/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"élevé"},
  //   {id : "3", nameProject: "Projet n°3", descProject: "Description n°3 ", createdAtProject:"05/10/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"élevé"},
  //   {id : "4", nameProject: "Projet n°4", descProject: "Description n°4 ", createdAtProject:"19/12/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"en cours",priorityOfProject:"faible"},
  //   {id : "5", nameProject: "Projet n°5", descProject: "Description n°5 ", createdAtProject:"01/04/2022",expiredAtProject:"21/05/2022",deadlineProject:"15/06/2022",stateOfProject:"terminé",priorityOfProject:"normale"}
  // ]

  firstName : string ="";
  searchedProject : string ="";
  p : number = 1;
  key : string ='id';
  reverse : boolean = false;
  /** */
  projectForm : FormGroup ;
  /** */
  projectsList : Project[] = [];
  /** */
  // id : string | null;
  /** */
  actualDate1 : Date;

  /** */
  titleOfOperation : string ="";

  /** */
  imageURL = "assets/img/noFile.png";

  /** */
  modalName = "Ajouter un projet";

  /** */
  clientsList : Client[] = [];

  /** */
  usersList : User[] = [];
  /** 
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
  */

  searchField : string ="";
  displayedColumns: string[] = ["nameProject", "descProject", "stateOfProject","typeOfProject","departmentProject", "managerOfProject","partnerOfProject","clientOfProject","actions"];
  dataSource !: MatTableDataSource<any>;
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) mySort! : MatSort ;
  /** */
  constructor(private modalService: NgbModal,private formbuilder:FormBuilder,private _projectsService: ProjectsService , private aRouter : ActivatedRoute , private toast : NgToastService , private _clientsService: ClientsService , private _userService: UsersService ) {
    this.projectForm = this.formbuilder.group({
      // 000000000000000000000000
      _id:["000000000000000000000000"],
      nameProject:['',Validators.required],
      descProject:['',Validators.required],
      priorityOfProject:["Moyenne"],
      stateOfProject:["En cours"],
      activatedProject:[true],
      typeOfProject:['',Validators.required],
      departmentProject:['',Validators.required],
      serviceLine:['',Validators.required],
      managerOfProject:['',Validators.required],
      partnerOfProject:['',Validators.required],
      clientOfProject:['',Validators.required]
      /**
       *         this.managerOfProject= managerOfProject;
        this.partnerOfProject = partnerOfProject;
        this.clientOfProject = clientOfProject;
       */

    });


    // this.id = this.aRouter.snapshot.paramMap.get('id');
    this._projectsService.findAllProjects().subscribe(data => {
      console.log(data);
      this.projectsList=data;
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.mySort;
      console.log('-------------><------------');
      console.log('---->',this.dataSource);
    }, error => {
      console.log(error);
    })
    this.actualDate1 = new Date();
    console.log("----->",this.actualDate1);
    /** */
    this._clientsService.findAllClients().subscribe(data => {
      console.log(data);
      this.clientsList=data;
      console.log('-------------><------------');
    }, error => {
      console.log(error);
    })
    /** */
    this._userService.findAllUsers().subscribe(data => {
      console.log(data);
      this.usersList=data;
      console.log('-------------><------------');
    }, error => {
      console.log(error);
    })


  }

  ngOnInit(): void {
    // this.membersList = [
    //   {Id: "1", firstName: "Mahwechi", lastName:"Karim",email:"mahwechikarim@gmail.com",mobile:"22287444",salary:"1000"},
    //   {Id: "2", firstName: "Ben Romdhane", lastName:"Mohamed",email:"benromdhanemohamed@gmail.com",mobile:"58209788",salary:"1200"},
    //   {Id: "3", firstName: "Soujel", lastName:"Ahmed",email:"ahmedsoujel45@gmail.com",mobile:"97856201",salary:"800"},
    //   {Id: "4", firstName: "Ouerheni", lastName:"Yosr",email:"yosrmefteh@gmail.com",mobile:"28963215",salary:"2000"},
    //   {Id: "5", firstName: "Sallemi", lastName:"Salwen",email:"salwensallemi@gmail.com",mobile:"54269874",salary:"1700"}
    // ]

    // this.projectsList1 = this.projects;
    this.getAllProjects();
    // this.timesheet = this.timesheetCopy;
    this.getAllUsers();



  }
  ngAfterViewInit (){
    this.dataSource.sort = this.mySort;
    
  }

  /** search the name of the project */
  Search(){
    if (this.searchedProject==''){
      this.ngOnInit()
    }else{this.projectsList = this.projectsList.filter(res => {
      return res.nameProject.toLocaleLowerCase().match(this.searchedProject.toLocaleLowerCase());
    })}
  } 
  /** sort columns */
  sortField(key:any){
    this.key = key ;
    this.reverse = !this.reverse;
  }
  /** open the modal  */
  openSm(content : any ) {
    this.modalService.open(content, { size: 'lg' });
    this.modalName = "Ajouter un projet";
    this.projectForm.reset({
      _id : '000000000000000000000000',
      nameProject : '',
      descProject : '',
      stateOfProject : 'En cours',
      priorityOfProject : 'Moyenne',
      activatedProject : true,
      typeOfProject : '',
      departmentProject :'',
      serviceLine : '',
      managerOfProject : '',
      partnerOfProject:'',
      clientOfProject:''  
    });
  }

  /** API : find all project method */
  getAllProjects(){
    this._projectsService.findAllProjects().subscribe(data => {
      console.log(data);
      this.projectsList=data;
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.mySort;
      console.log('-------------><------------');
      console.log('---->',this.dataSource);
    }, error => {
      console.log(error);
    })
  }
  getAllUsers(){
    // GET ALL USERS
    this._userService.findAllUsers().subscribe(data => {
    console.log(data);
    this.usersList=data;
    // console.log('-------------><------------',this.usersList);
    }, error => {
    console.log(error);
    });
  }
  /**API : remove an project  */
  deleteProject(id : any){
    // this._projectsService.deleteProject(id).subscribe(data=> {
    //   console.log("Project has been removed");
    //   this.toast.success({detail:"Opération réalisée avec succès",summary:"Ce projet à supprimé avec succès",duration:3000});
      
    //   this.getAllProjects();
    // }, error => {
    //   console.log(error);
    //   this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
    // })
    Swal.fire({
      title : 'Voulez-vous vraiment supprimer ce projet ?',
      text : 'Vous ne pourrez pas récupérer ce projet !',
      icon : 'info',
      showCancelButton : true,
      confirmButtonText:'Oui , confirmer l\'opération ...',
      cancelButtonText : 'Annuler',
      confirmButtonColor: "#0dcaf0",
      cancelButtonColor: "#adb5bd"

    }).then((result) => {
      if (result.value){
        this._projectsService.deleteProject(id).subscribe(data=> {
          console.log("Projet has been removed");
          // this.toast.success({detail:"Opération réalisée avec succès",summary:"Ce client à supprimé avec succès",duration:3000});        
          this.getAllProjects();
        }, error => {
          console.log(error);
          this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
        });

        // Swal.fire("Thank you ..",'You submitted successfully','success');
        Swal.fire({
          title : 'Opération réalisée avec succès ...',
          text : 'Ce projet à supprimé avec succès',
          icon : 'success',
          confirmButtonColor: "#0dcaf0",
          confirmButtonText:'Parfait ..'
        })
      }else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire('Cancelled','Your imaginary file is safe','error');
          Swal.fire({
            title : 'Cette opération n\'est pas encore terminée ..',
            text : 'Votre projet est en sécurité',
            icon : 'question',
            confirmButtonColor: "#adb5bd",
            confirmButtonText:'D\'accord !'
          })
      }
    });
  }

  // /** retrieve project details */
  // addProject(){
  //     /**
  //     console.log(this.projectForm.get('nameProject')?.value);
  //     console.log(this.projectForm.get('descProject')?.value);
  //     console.log(this.projectForm.get('createdAtProject')?.value);
  //     console.log(this.projectForm.get('deadlineProject')?.value);
  //     console.log(this.projectForm.get('stateOfProject')?.value);
  //     */
  //    const addedProject : Project = {
  //     nameProject : this.projectForm.get('nameProject')?.value,
  //     descProject : this.projectForm.get('descProject')?.value,
  //     createdAtProject : this.projectForm.get('createdAtProject')?.value,
  //     expiredAtProject : this.projectForm.get('deadlineProject')?.value,
  //     deadlineProject : this.projectForm.get('deadlineProject')?.value,
  //     stateOfProject : "En cours",
  //     priorityOfProject : this.projectForm.get('priorityOfProject')?.value
  //    }
  //   /** */
  //   // console.log(this.projectForm.value);
  //   /** */
  //   console.log(addedProject);
  //   /** */
  //    this._projectsService.addProject(addedProject).subscribe(data => {
  //     this.projectForm.reset();
  //      console.log('Project added ');      
  //      this.ngOnInit();
  //      this.toast.success({detail:"Projet ajouteé avec succès",summary:"",duration:3000});
  //    } , error => {
  //     console.log(error);
  //     this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
  //     this.projectForm.reset();
  //    })
     
  // }
  /** */
  getProject(){
    // if (this.id !== null){
    //   this._projectsService.findProject(this.id).subscribe( data => {
    //     this.projectForm.setValue({
    //       nameProject : data.nameProject,
    //       descProject : data.descProject,
    //       createdAtProject : data.createdAtProject,
    //       expiredAtProject : data.expiredAtProject,
    //       deadlineProject : data.deadlineProject,
    //       stateOfProject : data.stateOfProject,
    //       priorityOfProject : data.priorityOfProject
    //     })
    //   })
    // }
  }
  // ChangeData(project: Project) {

  //   this.service.formCum.reset({
  //     poleId: pole.poleId,
  //     poleName: pole.poleName,
  //     image: pole.image
  //   });

  // }
  /** open the modal  */
  openSmEdit(content : any , project : Project ) {
    this.modalService.open(content, { size: 'lg' });
    this.modalName = "Modifier ce projet";
    this.projectForm.reset({
      _id : project._id,
      nameProject : project.nameProject,
      descProject : project.descProject,
      stateOfProject : project.stateOfProject,
      priorityOfProject : project.priorityOfProject,
      activatedProject : project.activatedProject,
      typeOfProject : project.typeOfProject,
      departmentProject : project.departmentProject,
      serviceLine : project.serviceLine,
      managerOfProject : project.managerOfProject,
      partnerOfProject:project.partnerOfProject,
      clientOfProject:project.clientOfProject
    
    });
    this.ngOnInit();
  }

  addProject(){

    console.log('NAME :',this.projectForm.get('nameProject')?.value);
    console.log('DESC :',this.projectForm.get('descProject')?.value);
    console.log('TYPE :',this.projectForm.get('typeOfProject')?.value);
    console.log('DEPARTEMENT :',this.projectForm.get('departmentProject')?.value);
    console.log('SERVCIE LINE :',this.projectForm.get('serviceLine')?.value);
    console.log('MANAGER :',this.projectForm.get('managerOfProject')?.value);
    console.log('PARTNER :',this.projectForm.get('partnerOfProject')?.value);
    console.log('CLEINT :',this.projectForm.get('clientOfProject')?.value);
    console.log('PRIORTY :',this.projectForm.get('priorityOfProject')?.value);
    console.log('ACTIVATED :',this.projectForm.get('activatedProject')?.value);
    console.log('*************************************************');
    console.log('ID',this.projectForm.get('_id')?.value);

   const addedProject : Project = {
    // _id : this.projectForm.get('_id')?.value,
    nameProject : this.projectForm.get('nameProject')?.value,
    descProject : this.projectForm.get('descProject')?.value,
    stateOfProject : this.projectForm.get('stateOfProject')?.value,
    priorityOfProject : this.projectForm.get('priorityOfProject')?.value,
    activatedProject : this.projectForm.get('activatedProject')?.value,
    typeOfProject : this.projectForm.get('typeOfProject')?.value,
    departmentProject : this.projectForm.get('departmentProject')?.value,
    serviceLine : this.projectForm.get('serviceLine')?.value,
    managerOfProject : this.projectForm.get('managerOfProject')?.value,
    partnerOfProject : this.projectForm.get('partnerOfProject')?.value,
    clientOfProject : this.projectForm.get('clientOfProject')?.value

    
   }

  /** */
  if (this.projectForm.get('_id')?.value != "000000000000000000000000" ){
  /** Edit project */
  // console.log(this.projectForm.get('_id')?.value);
  console.log("*** UPDATE METHOD ***");
  this._projectsService.editProject(this.projectForm.get('_id')?.value , this.projectForm.value ).subscribe( data => {
  // this.router.navigate(['/Projects']);
  // this.toast.success({detail:"Opération réalisée avec succès ...",summary:"Ce projet à modifié avec succès",duration:3000});
  this.successAlert('du modification');
  this.projectForm.reset();
  this.ngOnInit();
  }, error => {
    console.log(error);
    this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
    this.projectForm.reset();
  })
  }else {
  /** Add project */
  console.log("*** ADD METHOD ***");
   this._projectsService.addProject(addedProject).subscribe(data => {
    this.projectForm.reset();
     console.log('Project added ');
     this.ngOnInit();
    //  this.toast.success({detail:"Opération réalisée avec succès ...",summary:"Ce projet à ajouté avec succès",duration:5000});
    this.successAlert('d\'ajout');
   } , error => {
    console.log(error);
    this.projectForm.reset();
    this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
   })
  }
  // console.log(this.projectForm.value);
  /** */
  // console.log(addedProject);    
}

today = new Date();

/** FILTER FUNCTION */
  filterData($event : any){
    this.dataSource.filter = $event.target.value; 
  }

  successAlert(action : any){
    // Swal.fire("Thank you ..",'You submitted successfully','success');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cette opération '+ action +' est réalisée avec succès .. ',
      // title : 'CETTE OPÉRATION EST '+ action+' RÉALISÉE AVEC SUCCÈS ..',
      showConfirmButton: false,
      timer: 5000
    });
  }

  errorAlert(action : any){
    // Swal.fire("Thank you ..",'You submitted successfully','success');
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Cette opération '+ action +' n\'est pas réalisée avec succès .. ',
      showConfirmButton: false,
      timer: 3000
    });
  }


}
