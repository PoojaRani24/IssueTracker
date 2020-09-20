import { Component, OnInit } from '@angular/core';
// import * as data from '../../card-details.json';
import { TranslateService } from '@ngx-translate/core';
import { change } from '../../toggle.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from '../../issue';

@Component({
  selector: 'app-issue-list-screen',
  templateUrl: './issue-list-screen.component.html',
  styleUrls: ['./issue-list-screen.component.scss']
})
export class IssueListScreenComponent  {
  count$: Observable<number>;

  Todo = 'High Priority';
  Progress = 'In-Progress';
  done = 'Done';

  // issues: any = (data as any).default;
  newissues: Array<Issue>;
  lan;

  constructor(private translate: TranslateService, private store: Store<{ count: number , issues: Issue[] }>) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
    this.count$ = store.pipe(select('count'));
    this.store.select('issues').subscribe((state => this.newissues = state));
  }

  ngOnChange(): void {
    this.lan = 'en';
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
  }
}
