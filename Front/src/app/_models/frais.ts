export class Frais{
    _id?:String;
    nameOfFrais:String;
    typeOfFrais:String;
    descOfFrais:String;
    calcUnitOfFrais:String;
    quantityOfFrais : Number ;
    unitPriceOfFrais : Number ;
    dateOfFrais : Date;
    categoryOfFrais : String ;
    stateOfFrais : String ;
    isRefundable : boolean ;
    isBillable : boolean ;

    // "nameOfFrais":"Déplacement Djerba - Tunis",
    // "typeOfFrais":"Frais kilométrique",
    // "descOfFrais":"Description",
    // "calcUnitOfFrais:"KM",
    // "quantityOfFrais":17,
    // "unitPriceOfFrais":5200,
    // "coastOfFrais": 88400,
    // "dateOfFrais": "15/04/2022",
    // "categoryOfFrais" : "Déplacement",
    // "stateOfFrais" : "Envoyé",
    // "isRefundable" : true,
    // "isBillable" : false

    constructor(nameOfFrais:string,typeOfFrais:string,descOfFrais:string,calcUnitOfFrais:string , quantityOfFrais:number , unitPriceOfFrais:number ,  dateOfFrais : Date , categoryOfFrais : string , stateOfFrais : string , isRefundable : boolean , isBillable : boolean  ){
        this.nameOfFrais=nameOfFrais;
        this.typeOfFrais=typeOfFrais;
        this.descOfFrais=descOfFrais;
        this.calcUnitOfFrais=calcUnitOfFrais;
        this.quantityOfFrais=quantityOfFrais;
        this.unitPriceOfFrais = unitPriceOfFrais;
        this.dateOfFrais=dateOfFrais;
        this.categoryOfFrais = categoryOfFrais;
        this.stateOfFrais = stateOfFrais;
        this.isRefundable = isRefundable;
        this.isBillable = isBillable;
    }
    
}