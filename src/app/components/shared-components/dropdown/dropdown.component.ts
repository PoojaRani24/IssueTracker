import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  toppings = new FormControl();

  toppingList: string[] = ['Projects', 'Status', 'Assignee', 'Done', 'In-Progress', 'High Priority'];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}

}
