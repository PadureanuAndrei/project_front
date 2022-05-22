import {Component, Input, OnInit} from '@angular/core';
import {UserModel, UserService} from "../../../../store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  user!: UserModel;

  user$!: Observable<UserModel>;

  @Input()
  userId!: number;

  constructor(private users: UserService) { }

  ngOnInit() {
    this.user$ = this.users.getById(this.userId);
  }
}
