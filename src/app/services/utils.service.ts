import { Injectable } from '@angular/core';
import * as math from 'mathjs';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    // esperanza de vida según INEI año 2019
    hopeLife = 78 ; 

    getHopeLife() {
        return this.hopeLife;
    }

    calculateAvgAgeClients(clients : any){
        let ageAvg = 0;
        if(clients.length > 0 ){
            let sumAge: number = 0;
            clients.forEach((client : any) => {
              sumAge = sumAge + parseInt(client.age);
            });
            ageAvg = sumAge / clients.length;
          }

        return ageAvg;
    }

    calculateStandarDeviation(clients : any){
        let ageStdDeviation = 0 ;
        if(clients.length > 0) {
            let ages:number[] = [];
            clients.forEach((client : any)=> {
              ages.push(client.age);
            });
            ageStdDeviation = math.std(ages,'uncorrected'); 
        }
        return ageStdDeviation;
    }
    
    calculateDeathDay(client : any) {
        if (client.birthday){
            let carryAge = this.hopeLife - client.age;
            let birthday  =new Date(client.birthday);
            let year = new Date().getFullYear();
            let month: number = birthday.getMonth();
            let day: number = birthday.getDate();
            let dateDeath = new Date(year + carryAge, month, day);
            return dateDeath;
          }
          return new Date();
    }

    posibiltyArrayAges(client : any) {
        let arrayAges : number[] = [];
        arrayAges.push(0);
        arrayAges.push(client.age);
        arrayAges.push(this.getHopeLife());
        return arrayAges;
    }

    posibiltyStringYears(client : any){
        let arrayYears : string[] = [];

        let carryAge = this.hopeLife - client.age;
        let currentYear = new Date().getFullYear().toString();
        let birthdayYear  = new Date(client.birthday).getFullYear().toString();
        let deathYear =  ( parseInt(currentYear) + carryAge).toString();
        
        arrayYears.push(birthdayYear);
        arrayYears.push(currentYear);
        arrayYears.push(deathYear);
        return arrayYears;
    }

}