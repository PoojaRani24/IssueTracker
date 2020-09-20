import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Issue } from '../../issue';
import { IssueAdd, IssueRemove } from '../../issue.actions';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-issue-add',
  templateUrl: './issue-add.component.html',
  styleUrls: ['./issue-add.component.scss']
})
export class IssueAddComponent {

  issues: Array<Issue>;

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
  }
  AddIssue(): void {
    const issue = new Issue();
    issue.id = this.id;
    issue.date = this.date;
    issue.title = this.title;
    issue.description = this.description;
    issue.name = this.name;
    issue.designation = this.designation;
    issue.status = this.status;
    this.store.dispatch(new IssueAdd(issue));
    this.categorise();
  }
  removeIssue(issueIndex: any): void {
     this.store.dispatch(new IssueRemove(issueIndex));
     this.categorise();
  }

  categorise(): void{
    this.IssueByStatus = groupBy(this.issues, 'status');
    this.HighPriority = this.IssueByStatus['High Priority'];
    this.InProgress = this.IssueByStatus['In-Progress'];
    this.Done = this.IssueByStatus.Done;
  }



}
