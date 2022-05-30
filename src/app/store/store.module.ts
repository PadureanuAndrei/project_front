import {NgModule} from "@angular/core";
import {AnnouncementService} from "./announcements";
import {UserService} from "./users";
import {BookingsService} from "./bookings";

@NgModule({
  providers: [
    AnnouncementService,
    UserService,
    BookingsService
  ]
})
export class StoreModule {}
