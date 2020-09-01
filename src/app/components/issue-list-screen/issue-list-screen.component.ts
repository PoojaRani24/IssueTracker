import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-list-screen',
  templateUrl: './issue-list-screen.component.html',
  styleUrls: ['./issue-list-screen.component.scss']
})
export class IssueListScreenComponent implements OnInit {
  todo=5;
  progress=2;
  done=4;
  Todo="High Priority";
  Progress="In-Progress";
  Done="Done";
  
  constructor() { }

  ngOnInit(): void {
  }

}
