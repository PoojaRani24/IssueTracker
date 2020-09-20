import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store'; 
import { Issue } from '../../issue'; 
import {Observable} from 'rxjs'; 
import { IssueAdd,IssueRemove } from '../../issue.actions'; 
import { groupBy } from 'lodash';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.scss']
})
export class IssueAddComponent {

  issues:Array<Issue>; 

  id: string;
  date: string;
  title: string;
  description: string;
  name: string;
  designation: string;
  status: string;

  IssueByStatus;
  HighPriority;
  InProgress ;
  Done;

  constructor(private store: Store<{ issues: Issue[] }>) { 
    this.store.select('issues').subscribe((state => this.issues = state)); 
    console.log(this.issues);
  } 
  AddIssue() { 
    console.log("Add method is called")
    const issue = new Issue(); 
    issue.id = this.id; 
    issue.date = this.date; 
    issue.title = this.title; 
    issue.description = this.description; 
    issue.name = this.name; 
    issue.designation = this.designation; 
    issue.status = this.status; 
    console.log(issue.name)
    this.store.dispatch(new IssueAdd(issue)); 
    console.log("Add method ends")
    console.log(this.issues);
    console.log(this.issues.length)
    this.IssueByStatus = groupBy(this.issues, 'status');
    console.log(this.IssueByStatus)
    this.HighPriority = this.IssueByStatus['High Priority'];
    this.InProgress = this.IssueByStatus['In-Progress'];
    this.Done = this.IssueByStatus.Done;
    // console.log(this.HighPriority)
    // console.log(this.InProgress)
    // console.log(this.Done)

  } 
  removeIssue(issueIndex) {
    this.store.dispatch(new IssueRemove(issueIndex));
  }

}
