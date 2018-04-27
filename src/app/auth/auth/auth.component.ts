import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  selectedPage: number = 1;


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  getPage(page) {
    this.selectedPage = page;
  }

  // setCurrentPage(value) {
  //   this.currentPage = value;
  // }
}
