import { Component, OnInit } from '@angular/core';
import { ClientService} from '../../services/client.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients: any[] = [];
  loading : boolean = false;
  showChart : boolean = false;
  lineChartData: ChartDataSets[] = [
  ];
  lineChartLabels: Label[] = [];
  lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];
  
  fullNameClient : string;
  bornYear : string;
  expectancyLife : string;

  constructor(private clientService : ClientService,private utilsService : UtilsService) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients(){
    this.loading = true;
    this.clientService.getAllClients()
      .subscribe((response) => {
        if(response.docs.length > 0 ){
          response.docs.forEach((doc) => {
            this.clients.push(doc.data());
          });
        } else {
          this.clients = [];
        }
        this.loading = false;
      })
  }
   
  clickShowChart(client : any){
    this.clearLineChartInfo();
    this.showChart = true;
    let arraysAge = this.utilsService.posibiltyArrayAges(client);
    let labelName = client.firstName + " " + client.lastName;
    let lineChartData = { 
        data : arraysAge, 
        label : labelName
    };
    this.lineChartData.push(lineChartData);
    let lineChartLabels = this.utilsService.posibiltyStringYears(client);
    this.lineChartLabels = lineChartLabels;

    this.bornYear = lineChartLabels[0];
    this.expectancyLife = lineChartLabels[2];
    this.fullNameClient =  labelName;
  }

  clearLineChartInfo(){
    this.lineChartLabels = [];
    this.lineChartData = [];
  }

}
