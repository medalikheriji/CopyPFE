export class Supervisor{
    _id?:string;
    fullnameSupervisor:string;
    mailSupervisor:string;
    phoneSupervisor:String;
    nationalitySupervisor:string;
    supervisorAt:string;

    constructor(fullnameSupervisor:string,mailSupervisor:string,phoneSupervisor:string,nationalitySupervisor:string , supervisorAt:string ){
        this.fullnameSupervisor=fullnameSupervisor;
        this.mailSupervisor=mailSupervisor;
        this.phoneSupervisor=phoneSupervisor;
        this.nationalitySupervisor=nationalitySupervisor;
        this.supervisorAt=supervisorAt;
    }
    
}