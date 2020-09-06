import { Component, OnInit } from '@angular/core';
import * as data from '../../card-details.json';
import { groupBy } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-issue-list-screen',
  templateUrl: './issue-list-screen.component.html',
  styleUrls: ['./issue-list-screen.component.scss']
})
export class IssueListScreenComponent implements OnInit {

  Todo = 'High Priority';
  Progress = 'In-Progress';
  done = 'Done';

  issues: any = (data as any).default;

  IssueByStatus;
  HighPriority;
  InProgress;
  Done;
  lan;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
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
  }

}
