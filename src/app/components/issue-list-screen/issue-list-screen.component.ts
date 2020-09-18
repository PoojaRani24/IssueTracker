import { Component, OnInit } from '@angular/core';
import * as data from '../../card-details.json';
import { groupBy } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { ThrowStmt } from '@angular/compiler';
import { change } from '../../toggle.actions';
// import { input } from '../../toggle.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-issue-list-screen',
  templateUrl: './issue-list-screen.component.html',
  styleUrls: ['./issue-list-screen.component.scss']
})
export class IssueListScreenComponent implements OnInit {
  count$: Observable<number>
  name$: Observable<string>
  Todo = 'High Priority';
  Progress = 'In-Progress';
  done = 'Done';
  value='';
  issues: any = (data as any).default;

  IssueByStatus;
  HighPriority;
  InProgress;
  Done;
  lan;

  constructor(private translate: TranslateService,private store: Store<{ count: number , name:string }>) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    this.count$ = store.pipe(select('count'));
    this.name$ = store.pipe(select('name'));
  }

  ngOnInit(): void {
    this.lan = 'en';
    this.IssueByStatus = groupBy(this.issues, 'status');
    this.HighPriority = this.IssueByStatus['High Priority'];
    this.InProgress = this.IssueByStatus['In-Progress'];
    this.Done = this.IssueByStatus.Done;
  }

  changeLanguage(): void {
    if ( this.lan === 'en' ){
      this.lan = 'de' ;
    }
    else{
      this.lan = 'en' ;
    }
    this.translate.use(this.lan);
    this.store.dispatch(change());
    // console.log(this.count$);
  }

  onEnter(value:string){
    console.log(value);
  }

}
