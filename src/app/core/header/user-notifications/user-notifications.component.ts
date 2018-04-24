import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss']
})
export class UserNotificationsComponent implements OnInit {
  isOpen2: boolean;

  constructor() { }

  ngOnInit() {
  }


  onClickOutside2() {
    this.isOpen2 = false;
  }


  toggleDropdown2() {
    this.isOpen2 = !this.isOpen2;
  }
}
