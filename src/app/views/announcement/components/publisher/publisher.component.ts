import {Component, Input, OnInit} from '@angular/core';
import {UserModel, UserService} from "../../../../store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  user: UserModel = {
    id: 1,
    name: 'Andrei Padureanu',
    email: 'andrei.padureanu67@gmail.com',
    phoneNumber: '060752346',
    photo: 2
  };

  user$!: Observable<UserModel>;

  @Input()
  userId!: number;

  constructor(private users: UserService) { }

  ngOnInit() {
    this.user$ = this.users.getById(this.userId);
  }
}
