import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import {AccountRoutingModule} from "./account-routing.module";
import { SettingsComponent } from './components/settings/settings.component';
import { MyAnnouncementsComponent } from './components/my-announcements/my-announcements.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {SharedComponentsModule} from "../../shared/shared-components/shared-components.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import { AnnouncementBookingsComponent } from './components/announcement-bookings/announcement-bookings.component';



@NgModule({
  declarations: [
    AccountComponent,
    SettingsComponent,
    MyAnnouncementsComponent,
    MyBookingsComponent,
    NavbarComponent,
    AnnouncementBookingsComponent
  ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedComponentsModule,
        ReactiveFormsModule,
        MatTableModule
    ]
})
export class AccountModule { }
