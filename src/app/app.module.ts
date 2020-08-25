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
import { InprogressCardComponent } from './components/shared-components/inprogress-card/inprogress-card.component';
import { DoneCardComponent } from './components/shared-components/done-card/done-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CardComponent,
    InprogressCardComponent,
    DoneCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
