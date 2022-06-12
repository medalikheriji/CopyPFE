import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from 'src/app/_services/projects.service';
import { Project } from 'src/app/_models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  // styleUrls: ['./list-projects.component.css']
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

  `]
})
export class ListProjectsComponent implements OnInit {


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
  /** */ statuForm : FormGroup ;
  /** */
  projectsList : Project[] = [];
  /** */
  // id : string | null;
  /** */
  actualDate = new Date;
  /** */
  titleOfOperation : string ="";
  constructor(private modalService: NgbModal,private formbuilder:FormBuilder,private _projectsService: ProjectsService , private aRouter : ActivatedRoute , private toast : NgToastService) {
    this.projectForm = this.formbuilder.group({
      _id:['000000000000000000000000'],
      nameProject:['',Validators.required],
      descProject:['',Validators.required],
      createdAtProject:['',Validators.required],
      priorityOfProject:['',Validators.required],
      stateOfProject:['',Validators.required],
      activatedProject:[false],
      typeOfProject:[''],
      departmentProject:[''],
      serviceLine:['']
    })
    this.statuForm = this.formbuilder.group({
      activateProject:[false]
      // _id:['000000000000000000000000'],
      // nameProject:['',Validators.required],
      // descProject:['',Validators.required],
      // createdAtProject:['',Validators.required],
      // deadlineProject:['',Validators.required],
      // expiredAtProject:[''],
      // priorityOfProject:['',Validators.required],
      // stateOfProject:['',Validators.required],
      // activatedProject:[false],
      // typeOfProject:['']
    })
    // this.id = this.aRouter.snapshot.paramMap.get('id');
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
  }

  /** API : find all project method */
  getAllProjects(){
    this._projectsService.findAllProjects().subscribe(data => {
      console.log(data);
      this.projectsList=data;
    }, error => {
      console.log(error);
    })
  }
  /**API : remove an project  */
  deleteProject(id : any){
    this._projectsService.deleteProject(id).subscribe(data=> {
      console.log("Project has been removed");
      this.toast.success({detail:"Opération réalisée avec succès",summary:"Ce projet à supprimé avec succès",duration:3000});
      
      this.getAllProjects();
    }, error => {
      console.log(error);
      this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
    })
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
    this.projectForm.reset({
      _id : project._id,
      nameProject : project.nameProject,
      descProject : project.descProject,
      createdAtProject : project.createdAtProject,
      stateOfProject : project.stateOfProject,
      priorityOfProject : project.priorityOfProject,
      activatedProject : project.activatedProject,
      typeOfProject : project.typeOfProject,
      departmentProject : project.departmentProject,
      serviceLine : project.serviceLine,
    });
    this.ngOnInit();
  }

  addProject(){

    console.log(this.projectForm.get('nameProject')?.value);
    console.log(this.projectForm.get('descProject')?.value);
    console.log(this.projectForm.get('createdAtProject')?.value);
    console.log(this.projectForm.get('deadlineProject')?.value);
    console.log(this.projectForm.get('stateOfProject')?.value);

   const addedProject : Project = {
    _id : this.projectForm.get('_id')?.value,
    nameProject : this.projectForm.get('nameProject')?.value,
    descProject : this.projectForm.get('descProject')?.value,
    stateOfProject : this.projectForm.get('stateOfProject')?.value,
    priorityOfProject : this.projectForm.get('priorityOfProject')?.value,
    activatedProject : this.projectForm.get('activatedProject')?.value,
    typeOfProject : this.projectForm.get('typeOfProject')?.value,
    createdAtProject : this.projectForm.get('createdAtProject')?.value,
    departmentProject : this.projectForm.get('departmentProject')?.value,
    serviceLine : this.projectForm.get('serviceLine')?.value,

    
   }

  /** */
  if (this.projectForm.get('_id')?.value != "000000000000000000000000"){
  /** Edit project */
  console.log(this.projectForm.get('_id')?.value);
  this._projectsService.editProject(this.projectForm.get('_id')?.value , this.projectForm.value ).subscribe( data => {
  // this.router.navigate(['/Projects']);
  this.toast.success({detail:"Opération réalisée avec succès ...",summary:"Ce projet à modifié avec succès",duration:3000});
  this.projectForm.reset();
  this.ngOnInit();
  }, error => {
    console.log(error);
    this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
    this.projectForm.reset();
   })
  }else {
  /** Add project */
   this._projectsService.addProject(addedProject).subscribe(data => {
    this.projectForm.reset();
     console.log('Project added ');
     this.ngOnInit();
     this.toast.success({detail:"Opération réalisée avec succès ...",summary:"Ce projet à ajouté avec succès",duration:5000});
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
addAcProject(){
  console.log(this.statuForm.value);
}

saveChange(_id : any , project : Project){

  const addedProject : Project = {
    _id : project._id,
    nameProject : project.nameProject,
    descProject : project.descProject,
    createdAtProject : project.createdAtProject,
    stateOfProject : project.stateOfProject,
    priorityOfProject : project.priorityOfProject,
    typeOfProject : project.typeOfProject,
    activatedProject : project.activatedProject,
    departmentProject : project.departmentProject,
    serviceLine : project.serviceLine,
   }

  console.log(addedProject);
  console.log(this.statuForm.value);
  console.log(_id);
  if (addedProject.activatedProject === true){
    addedProject.activatedProject = false ;
  }else{
    addedProject.activatedProject = true ;
  }
  console.log("%%%%");
  console.log(addedProject);
  this._projectsService.editProjectByState(_id , addedProject ).subscribe( data => {
    // this.router.navigate(['/Projects']);
    this.toast.success({detail:"Opération réalisée avec succès ...",summary:"Ce projet à modifié avec succès",duration:3000});
    }, error => {
      console.log(error);
      this.toast.error({detail:"Message d'erreur",summary:error,duration:3000});
      this.projectForm.reset();
  });
}

}
