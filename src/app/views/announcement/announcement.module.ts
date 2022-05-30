import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement.component';
import {AnnouncementRoutingModule} from "./announcement-routing.module";
import { CarouselComponent } from './components/carousel/carousel.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { DescriptionComponent } from './components/description/description.component';
import { ReviewComponent } from './components/review/review.component';
import { BookingComponent } from './components/booking/booking.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AnnouncementComponent,
    CarouselComponent,
    PublisherComponent,
    DescriptionComponent,
    ReviewComponent,
    BookingComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatIconModule,
  ],
})
export class AnnouncementModule { }
