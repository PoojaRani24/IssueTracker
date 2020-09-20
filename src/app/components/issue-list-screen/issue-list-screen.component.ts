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
import { Issue } from '../../issue'

@Component({
  selector: 'app-issue-list-screen',
  templateUrl: './issue-list-screen.component.html',
  styleUrls: ['./issue-list-screen.component.scss']
})
export class IssueListScreenComponent  {
  count$: Observable<number>
 
  Todo = 'High Priority';
  Progress = 'In-Progress';
  done = 'Done';
  
  issues: any = (data as any).default;
  newissues: Array<Issue>; 
  IssueByStatus;
  HighPriority;
  InProgress;
  Done;
  lan;

  constructor(private translate: TranslateService,private store: Store<{ count: number , issues: Issue[] }>) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    this.count$ = store.pipe(select('count'));
    this.store.select('issues').subscribe((state => this.newissues = state))
    //  this.newissues = store.pipe(select('issues')); 
     console.log(this.newissues);
    console.log(this.count$);
    // this.IssueByStatus = groupBy(this.newissues, 'status');
    // console.log(this.IssueByStatus)
    // this.name$ = store.pipe(select('name'));
  }

  ngOnChange(): void {
    this.lan = 'en';
    this.store.select('issues').subscribe((state => this.newissues = state))
    //  this.newissues = store.pipe(select('issues')); 
     console.log(this.newissues);
    this.IssueByStatus = groupBy(this.newissues, 'status');
    console.log(this.IssueByStatus)
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
