import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/shared-components/navigation-bar/navigation-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/shared-components/card/card.component';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent } from './components/shared-components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IssueListScreenComponent } from './components/issue-list-screen/issue-list-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CardComponent,
    DropdownComponent,
    IssueListScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    // FormControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
