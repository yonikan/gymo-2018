import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  isOpen: boolean;
  userDetails;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUserData();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  onLogout() {
    this.authService.logout();
  }

  getUserData() {
    this.userDetails = this.authService.getUserDetails();
  }
}
