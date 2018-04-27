import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor() { }

  @Output() selectedPage = new EventEmitter<number>();

  ngOnInit() {
  }

  onSelectedPage(page) {
    this.selectedPage.emit(page); 
  }
}
