import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isEditInfo: boolean = false;
  isEditImg: boolean = false;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  countrys = [
    { value: 'il', viewValue: 'Israel' }
  ];

  maritalStatuses = [
    { value: 'married', viewValue: 'Married' },
    { value: 'single', viewValue: 'Single '}
  ];

  constructor() { }

  ngOnInit() {

  }

  toggleEditInfo() {
    this.isEditInfo = !this.isEditInfo;
  }

  toggleEditImg() {
    this.isEditImg = !this.isEditImg;
  }
}
