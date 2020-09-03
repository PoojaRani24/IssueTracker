import { Component, OnInit ,Input} from '@angular/core';
import * as data from '../../../card-details.json';
import '../../../../assets/utilities/_variable.scss';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
 @Input() status:string;
 HighPriority="High Priority";
 Progress="In-Progress";
 Done="Done";
  products: any = (data as any).default;

  ngOnInit(): void {
    console.log(this.status);
    console.log(this.status==="High Priority")
  }

}
