import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import '../../../../assets/utilities/_variable.scss';
import { Issue } from '../../../issue';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  issues: Array<Issue>;
  constructor(private store: Store<{ issues: Issue[] }>) {
    this.store.select('issues').subscribe((state => this.issues = state));
   }
 @Input() issue: Issue;
 @Output()
 selected: EventEmitter<string> = new EventEmitter<string>();
 HighPriority = 'High Priority';
 Progress = 'In-Progress';
 Done = 'Done';

 del(id: any): void{
  this.selected.emit(id);
 }

  ngOnInit(): void {}

}
