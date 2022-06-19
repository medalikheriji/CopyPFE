export class Client{
    _id?:string;
    nameClient : String;
    taxRegisterClient: String;
    addressClient : String;
    complementAddressClient : string ;
    cityClient : String;
    countryClient : String;
    socialReasonClient : String;
    activitySectorClient : String;
    phoneClient : String;
    mailClient : String;



    constructor(nameClient:string,taxRegisterClient:string,addressClient:string,complementAddressClient:string,cityClient:string,countryClient:string,socialReasonClient:string , activitySectorClient:string , phoneClient:string , mailClient:string ){
        this.nameClient=nameClient;
        this.taxRegisterClient=taxRegisterClient;
        this.addressClient=addressClient;
        this.complementAddressClient=complementAddressClient;
        this.cityClient=cityClient;
        this.countryClient=countryClient;
        this.socialReasonClient=socialReasonClient;
        this.activitySectorClient = activitySectorClient ;
        this.phoneClient = phoneClient ;
        this.mailClient = mailClient;

    }
    
}