import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Review, UserService} from "../../../../store";
import {map, Observable, Subject, take} from "rxjs";
import {UserModel} from "../../../../core";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnChanges {

  @Input()
  review!: Review;

  reviewWithUser: Observable<{message: string; reviewer: UserModel}> = new Subject();

  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.userService.getById(this.review.reviewer)
      .pipe(
        map(user => ({
          message: this.review.message,
          reviewer: user
        })),
        take(1),
      )
      .subscribe(review => this.reviewWithUser.subscribe)
  }
}
