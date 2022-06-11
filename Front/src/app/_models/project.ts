export class Project{
    _id?:string;
    nameProject:string;
    descProject:string;
    createdAtProject:Date;
    stateOfProject:string;
    priorityOfProject:string;
    activatedProject:boolean;
    typeOfProject:string;
    departmentProject:string;
    serviceLine:string;

    constructor(nameProject:string,descProject:string,createdAtProject:Date,stateOfProject:string,priorityOfProject:string , activatedProject:boolean , typeOfProject:string , departmentProject:string , serviceLine:string ){
        this.nameProject=nameProject;
        this.descProject=descProject;
        this.createdAtProject=createdAtProject;
        this.stateOfProject=stateOfProject;
        this.priorityOfProject=priorityOfProject;
        this.activatedProject=activatedProject;
        this.typeOfProject = typeOfProject ;
        this.departmentProject = departmentProject ;
        this.serviceLine = serviceLine ;
    }
}