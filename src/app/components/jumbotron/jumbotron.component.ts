import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  subtitle : string = 'Hola Usuario';
  description : string = 'Bienvenido al sistema web';
  constructor() { }

  ngOnInit() {
  }

}
