import { Component, OnInit , Input } from '@angular/core';
import '../../../../assets/utilities/_variable.scss';
import { Issue } from '../../../issue';
import { IssueAdd,IssueRemove } from '../../../issue.actions'; 
import {select, Store} from '@ngrx/store'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  issues: Array<Issue>;
  constructor(private store: Store<{ issues: Issue[] }>) {
    this.store.select('issues').subscribe((state => this.issues = state))
   }
 @Input() issue: Issue;

 HighPriority = 'High Priority';
 Progress = 'In-Progress';
 Done = 'Done';

 del(id){
  //  alert(id);
   this.store.dispatch(new IssueRemove(id));
 }

  ngOnInit(): void {}

}
