export class User{
    _id?:string;
    // fullnameSupervisor:string;
    // mailSupervisor:string;
    // phoneSupervisor:String;
    // nationalitySupervisor:string;
    // supervisorAt:string;
    firstname: String;
    lastname: String;
    matricule: String;
    email: String;
    password:String;
    phonenum: String;
    profile: String;
    isAdmin:Boolean;
    pays : String;
    etat : String;
 
    constructor(firstname:string,lastname:string,matricule:string,email:string , password:string , phonenum:string , profile:string , isAdmin :boolean , pays : string , etat : string){
        this.firstname=firstname;
        this.lastname=lastname;
        this.matricule=matricule;
        this.email=email;
        this.password=password;
        this.phonenum=phonenum;
        this.profile=profile;
        this.isAdmin = isAdmin;
        this.pays=pays;
        this.etat = etat;


    }
    
}