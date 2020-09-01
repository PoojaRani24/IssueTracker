import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueListScreenComponent } from './components/issue-list-screen/issue-list-screen.component';

const routes: Routes = [
  { path: 'issuelist', component: IssueListScreenComponent},
  { path: '', component: IssueListScreenComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
