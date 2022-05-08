import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement.component';
import {AnnouncementRoutingModule} from "./announcement-routing.module";
import { CarouselComponent } from './components/carousel/carousel.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { DescriptionComponent } from './components/description/description.component';



@NgModule({
  declarations: [
    AnnouncementComponent,
    CarouselComponent,
    PublisherComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ]
})
export class AnnouncementModule { }
