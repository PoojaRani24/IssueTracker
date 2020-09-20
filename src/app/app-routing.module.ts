import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListScreenComponent } from './components/issue-list-screen/issue-list-screen.component';
import { IssueAddComponent } from './components/issue-add/issue-add.component'

const routes: Routes = [
  { 
    path:'',
    redirectTo:'/issuelist',
    pathMatch:'full'
  },
  { 
    path: 'issuelist', 
    component: IssueListScreenComponent
  },
  { 
    path: 'add',
    component: IssueAddComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
