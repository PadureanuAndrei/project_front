import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement.component';
import {AnnouncementRoutingModule} from "./announcement-routing.module";
import { CarouselComponent } from './components/carousel/carousel.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { DescriptionComponent } from './components/description/description.component';
import { ReviewComponent } from './components/review/review.component';



@NgModule({
  declarations: [
    AnnouncementComponent,
    CarouselComponent,
    PublisherComponent,
    DescriptionComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ]
})
export class AnnouncementModule { }
