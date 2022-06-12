import { Component, ElementRef, OnInit , ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

import {NgbModal, ModalDismissReasons, NgbAccordionConfig, NgbActiveModal, NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { MapCustomService } from 'src/app/_services/map-custom.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
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
    /* table #albums 
    {
    border-collapse:separate;
    border-spacing:0 1rm;
    background-color:cyan;
    } */
    /* #container{
      display : flex ;
      background-color:bisque;
      align-content:center;
      justify-content:center;
      display:inline-block;
    } */

    /* #container div {
      background-color:red;
      align-items: center ;
      margin:5px;
      padding:5px;
      width:100%;
      border-right: double;
      display:inline-block;

    } */
    .card-header{
      background-color:white;
      margin-left:30px;
      margin-right:30px;
      width:80%;
      display:inline-block;
    }
    .card-body{
    }
    *{
    /* font-family: 'Sofia Pro', sans-serif;  */
    font-family: 'Manrope';
    }
    #card1{
      margin:1px;
      padding:1px;
    }
    h6{
      margin-top:5px;
      margin-bottom:0px;
      font-size:14px;
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
      background: #17a2b8 !important;
      border: transparent !important;
      border-radius: 20px !important;
    }

    .ngx-pagination .current:hover {
      background: #17a2b8 !important;
      border-radius: 20px !important; 
      border: transparent !important;
    }

    /** */
    table {
      border-collapse: collapse;
      border-radius: 1%;
      overflow: hidden;
    }

    th, td {
      padding: 2px;
      border-bottom: 2px solid white; 
    }

  `]
})
export class ExpenseComponent implements OnInit {


  expensesList: Array<{id: string ,titre:string , date: string, description: string, categorie:string,ville:string,noteFrais:string,montant:string,aRembourser:boolean,tva:string,etat:string}> = [
    {id : "1", titre : "1 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", titre : "2 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", titre : "3 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", titre : "4 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", titre : "5 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", titre : "6 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", titre : "7 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", titre : "8 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", titre : "9 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", titre : "10 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", titre : "11 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", titre : "12 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", titre : "13 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", titre : "14 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", titre : "15 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
    {id : "1", titre : "16 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
    {id : "2", titre : "17 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
    {id : "3", titre : "18 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
    {id : "4", titre : "19 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
    {id : "5", titre : "20 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"}
  ]
  titreDep : string ="";
  p : number = 1;
  key : string ='id';
  reverse : boolean = false;
  /** */
  closeResult :any ="" ;
  isDisabled = false;
  urlFile : any ="assets/img/noFile.png";
  urlFile1 : any ;
  /** */
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};
  /** */
  public isCollapsed = true;

  /** */
  myForm1:any;
  myFormDepense:any;

  /** */
  public categories : Array<String> = ['Avion ','Carburant','Divers','Divertissement ' ,'Eau' ,'Frais postaux ', 'Gaz ', 'Hébergement' ,'Internet ' , 'Loyer', 'Matériel' , 'Parking' , 'Péage ' , 'Resturation' , 'Services' , 'Taxi' , 'Transport' ,' Téléphone ', 'Voiture '];

  /** */
  distance : any = this.mapCustomService.getDistanceBetweenPonits() ;

  /** */
  PDF_File : any ="assets/img/guide pfe2021-2022 (1).pdf";
  constructor(private modalService: NgbModal,private configAccor:NgbAccordionConfig,private formbuilder:FormBuilder , private mapCustomService : MapCustomService , private sanitizer : DomSanitizer) {
    this.urlFile1 = sanitizer.bypassSecurityTrustUrl(this.urlFile);

  }

  ngOnInit(): void {
    this.expensesList = [
      {id : "1", titre : "1 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", titre : "2 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", titre : "3 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", titre : "4 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", titre : "5 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
      {id : "1", titre : "6 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", titre : "7 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", titre : "8 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", titre : "9 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", titre : "10 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
      {id : "1", titre : "11 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2"!, titre : "12 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", titre : "13 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", titre : "14 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", titre : "15 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"},
      {id : "1", titre : "16 titre", date: "20/03/2022", description: "Desc 1 ", categorie:"Avion",ville:"Djerba",noteFrais:"Note 1",montant:"1500",aRembourser:true,tva:"12500",etat:"Verfiée"},
      {id : "2", titre : "17 titre", date: "05/11/2022", description: "Desc 2 ", categorie:"Carburant",ville:"Tunisie",noteFrais:"Note 2",montant:"8700",aRembourser:false,tva:"17500",etat:"En attente"},
      {id : "3", titre : "18 titre", date: "17/02/2022", description: "Desc 3 ", categorie:"Internet",ville:"Bizerte",noteFrais:"Note 3",montant:"6300",aRembourser:true,tva:"9000",etat:"Rejetée"},
      {id : "4", titre : "19 titre", date: "10/04/2022", description: "Desc 4 ", categorie:"Restauration",ville:"Sfax",noteFrais:"Note 4",montant:"9900",aRembourser:false,tva:"26500",etat:"En attente"},
      {id : "5", titre : "20 titre", date: "29/12/2022", description: "Desc 5 ", categorie:"Peage",ville:"Touzeur",noteFrais:"Note 5",montant:"3400",aRembourser:false,tva:"39100",etat:"Verfiée"}
    ];
    this.myForm1 = this.formbuilder.group({
      titreNoteFrais:['', Validators.required],
      descNoteFrais:['', Validators.required]
    });
    this.myFormDepense = this.formbuilder.group({
      facturableDepense:[false],
      titreDepense:['', Validators.required],
      dateDepense:['', Validators.required],
      cateDepense:['', Validators.required],
      etatDepense:['', Validators.required],
      paysDepense:[''],
      rembourserDepense:[false],
      noteFraisDepense:['', Validators.required],
      descDepense:[''],
      montantDepense:[''],
      mntDepense:[''],
      taxDepense:[''],
      fichierDepense:['']
    });
    console.log("SS --",this.mapCustomService.getDistanceBetweenPonits());
    this.distance = this.mapCustomService.getDistanceBetweenPonits() ;

  }

  Search(){
    if (this.titreDep==''){
      this.ngOnInit()
    }else{this.expensesList = this.expensesList.filter(res => {
      return res.titre.toLocaleLowerCase().match(this.titreDep.toLocaleLowerCase());
    })}
  } 
  
  sortField(key:any){
    this.key = key ;
    this.reverse = !this.reverse;
  }

  openScrollableContent(longContent : any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  openScrollableContent1(longContent1 : any) {
    this.modalService.open(longContent1, { scrollable: true });
  }

  onSelectFile(e:any){
    console.log("------> ",e.target.files[0].type);
    // application/pdf
    // image/png -- image/jpeg
    
    if (e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        console.log("OOO",event.target.result);
        console.log("OOOPPPOOO",this.urlFile);
        this.urlFile1=event.target.result;
        console.log("TTT",this.urlFile1);
      }
    }
  }

  // photoURL(url : any ) {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }

  @ViewChild('taxValue') taxValue!:ElementRef;
  triggerSomeEvent() {
    this.isDisabled = !this.isDisabled;
    this.taxValue.nativeElement.value =null;
    console.log(this.taxValue.nativeElement.value);
    return;
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  } 

  deleteFieldValue(index:any) {
    this.fieldArray.splice(index, 1);
  }

  openXl(content : any) {
    this.modalService.open(content, { size: 'xl' });
  }
  openBackDropCustomClass(content:any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content:any) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content:any) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content:any) {
    this.modalService.open(content, { size: 'lg' });
  }


  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }

  openModalDialogCustomClass(content:any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }

  print(){
    console.log(this.myForm1.value);
    this.myForm1.reset();
  }
  printDepense(){
    console.log(this.myFormDepense.value);
    this.myFormDepense.reset();
  }

  /** */
  printDistance(){
    console.log("SS --",this.mapCustomService.getDistanceBetweenPonits());
    this.distance = this.mapCustomService.getDistanceBetweenPonits() ;
  }

}
