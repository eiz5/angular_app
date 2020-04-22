import { Component, OnInit } from '@angular/core';
import { IUser } from './i-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, IUser {
  public id: string;
  public lastName: string;
  public firstName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
