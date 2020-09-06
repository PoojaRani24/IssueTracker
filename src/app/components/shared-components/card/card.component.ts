import { Component, OnInit , Input } from '@angular/core';
import '../../../../assets/utilities/_variable.scss';
import { Issue } from '../../../issue';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
 @Input() issue: Issue;

 HighPriority = 'High Priority';
 Progress = 'In-Progress';
 Done = 'Done';

  ngOnInit(): void {}

}
