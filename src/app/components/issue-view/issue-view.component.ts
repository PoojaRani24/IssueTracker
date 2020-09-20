import { Component } from '@angular/core';
import { Issue } from '../../issue'; 
import {select, Store} from '@ngrx/store'; 
import {Observable} from 'rxjs';

@Component({
  selector: 'app-issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.scss']
})
export class IssueViewComponent {
  issues: Observable<Issue[]>;
  constructor(private store: Store<{ issues: Issue[] }>) { 
    this.issues = store.pipe(select('issues')); 
  }

}
