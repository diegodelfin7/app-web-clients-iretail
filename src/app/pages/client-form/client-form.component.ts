import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { ClientService} from '../../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  loading : boolean = false;
  formClient: FormGroup;
  constructor(private clientService : ClientService) { 
    
  }

  ngOnInit() {
    this.formClient = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName : new FormControl(null, Validators.required),
      age : new FormControl(null, Validators.required),
      birthday : new FormControl(null, Validators.required)
		});
  }

  save(){
    this.loading = true;
    this.clientService.createClient(this.formClient.getRawValue())
      .then( (response) => {
        if(response.id){
          this.loading = false;
          this.clearForm();
        }
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      })
  }

  clearForm(){
    this.formClient.reset();
  }

 
  
}
