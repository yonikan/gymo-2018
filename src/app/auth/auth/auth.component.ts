import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  currentPage;

  constructor() { }

  ngOnInit() {
    this.currentPage = 1;
  }

  setCurrentPage(value) {
    this.currentPage = value;
  }
}
