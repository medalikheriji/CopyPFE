export class Project{
    _id?:string;
    nameClient : String;
    taxRegisterClient: String;
    addressClient : String;
    complementAddressClient : string ;
    cityClient : String;
    countryClient : String;
    socialReasonClient : String;
    activitySectorClient : String;
    postCodeClient : String;
    phoneClient : String;
    faxClient : String;
    mailClient : String;
    siteWebClient : String;


    constructor(nameClient:string,taxRegisterClient:string,addressClient:string,complementAddressClient:string,cityClient:string,countryClient:string,socialReasonClient:string , activitySectorClient:string , postCodeClient:string , phoneClient:string , faxClient:string, mailClient:string , siteWebClient:string ){
        this.nameClient=nameClient;
        this.taxRegisterClient=taxRegisterClient;
        this.addressClient=addressClient;
        this.complementAddressClient=complementAddressClient;
        this.cityClient=cityClient;
        this.countryClient=countryClient;
        this.socialReasonClient=socialReasonClient;
        this.activitySectorClient = activitySectorClient ;
        this.postCodeClient = postCodeClient ;
        this.phoneClient = phoneClient ;
        this.mailClient = mailClient;
        this.faxClient = faxClient ;
        this.siteWebClient = siteWebClient ;
    }
    
}