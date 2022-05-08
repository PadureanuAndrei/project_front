import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements.component';
import {AnnouncementsRoutingModule} from "./announcements-routing.module";
import { SearchAnnouncementComponent } from './components/search-announcement/search-announcement.component';
import {SearchService} from "./services/search/search.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AnnouncementsComponent,
    SearchAnnouncementComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SearchService,
  ]
})
export class AnnouncementsModule { }
