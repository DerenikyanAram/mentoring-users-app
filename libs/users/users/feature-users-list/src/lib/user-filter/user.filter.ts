import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersFacade} from "@users/users/data-access";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'user-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-filter.html',
  styleUrls: ['./user.filter.scss'],
})
export class UserFilter {
  nameControl = new FormControl('');

  constructor(private usersFacade: UsersFacade) {
    this.nameControl.valueChanges.subscribe(name => {
      this.usersFacade.setUsersFilter(name || '');
    });
  }
}




