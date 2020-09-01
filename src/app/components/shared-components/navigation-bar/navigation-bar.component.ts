import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
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
