import { faker } from "@faker-js/faker";



export class Company {
    name:string;
    catchPhrase:string;
    location:{
        lat:number,
        long:number,
    }


    constructor(){
        this.name=faker.company.name();
        this.catchPhrase=faker.company.catchPhrase();

        this.location={
            lat:parseFloat( faker.address.latitude()),
            long:parseFloat(faker.address.longitude()),
        }
    }

}

