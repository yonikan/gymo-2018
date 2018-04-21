import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  
  // added for the user dropdown
  isOpen: boolean;
  isOpen2: boolean;


  // animal: string;
  // name: string;
  // recentlyVisited: SidenavItem[] = [ ];


  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }




  onClickSetting() {
    this.router.navigate(['/training']);
  }

  toggleDropdown2() {
    this.isOpen2 = !this.isOpen2;
  }

  onClickOutside2() {
    this.isOpen2 = false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(HeaderDialog, {
      height: '600px',
      width: '1200px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'header-dialog',
  templateUrl: 'header-dialog.component.html',
})
export class HeaderDialog {

}
