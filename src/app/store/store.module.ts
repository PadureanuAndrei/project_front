import {NgModule} from "@angular/core";
import {AnnouncementService} from "./announcements";
import {UserService} from "./users";

@NgModule({
  providers: [
    AnnouncementService,
    UserService
  ]
})
export class StoreModule {}
