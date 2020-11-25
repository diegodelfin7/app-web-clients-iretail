import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];
  loading : boolean = false;
  
  ageStdDeviation : number = 0 ;
  ageAvg : number = 0;

  constructor( private clientService : ClientService, private utilsService : UtilsService) { }

  ngOnInit() {
    this.getAllClient();
  }

  getAllClient(){
    this.loading = true;
    this.clientService.getAllClients()
      .subscribe((response) => {
        if(response.docs.length > 0 ){
          response.docs.forEach((doc) => {
            this.clients.push({id : doc.id , ...doc.data()});  
            this.calculateAvgAgeClients();
            this.calculateStandarDeviation();
          });
        } else {
          this.clients = [];
        }
        this.loading = false;
      });
  }

  deleteClient(client : any,index : number){
    this.loading = true;
    this.clientService.deleteClient(client.id)
      .then(() => {
        this.loading = false;
        this.clients.splice(index,1);
        this.calculateAvgAgeClients();
        this.calculateStandarDeviation();
      })
      .catch(error => {
        console.log(error);
      })
  }

  calculateAvgAgeClients(){
    let ageAvg =  this.utilsService.calculateAvgAgeClients(this.clients);
    this.ageAvg = ageAvg;
  }

  calculateStandarDeviation(){
    let ageStdDeviation = this.utilsService.calculateStandarDeviation(this.clients);
    this.ageStdDeviation = ageStdDeviation;
  }

  calculateDeathDay(client : any){
    return this.utilsService.calculateDeathDay(client);
  }

}
