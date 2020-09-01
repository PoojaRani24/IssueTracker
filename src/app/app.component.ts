import { Component, OnInit } from '@angular/core';
import * as data from './card-details.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracker';

  products: any = (data as any).default;

  constructor(){}
  ngOnInit(){
  }
}
