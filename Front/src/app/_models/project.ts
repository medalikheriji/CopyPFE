export class Project{
    _id?:string;
    nameProject:string;
    descProject:string;
    stateOfProject:string;
    priorityOfProject:string;
    activatedProject:boolean;
    typeOfProject:string;
    departmentProject:string;
    serviceLine:string;
    managerOfProject:string;
    partnerOfProject:string;
    clientOfProject:string;

    constructor(nameProject:string,descProject:string,stateOfProject:string,priorityOfProject:string , activatedProject:boolean , typeOfProject:string , departmentProject:string , serviceLine:string , managerOfProject:string , partnerOfProject:string , clientOfProject:string ){
        this.nameProject=nameProject;
        this.descProject=descProject;
        this.stateOfProject=stateOfProject;
        this.priorityOfProject=priorityOfProject;
        this.activatedProject=activatedProject;
        this.typeOfProject = typeOfProject ;
        this.departmentProject = departmentProject ;
        this.serviceLine = serviceLine ;
        this.managerOfProject = managerOfProject;
        this.partnerOfProject = partnerOfProject;
        this.clientOfProject = clientOfProject;
    }
    
}