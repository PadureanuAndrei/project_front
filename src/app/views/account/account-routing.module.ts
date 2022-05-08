import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccountComponent} from "./account.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {MyAnnouncementsComponent} from "./components/my-announcements/my-announcements.component";
import {MyBookingsComponent} from "./components/my-bookings/my-bookings.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'my-announcements',
        component: MyAnnouncementsComponent,
      },
      {
        path: 'my-bookings',
        component: MyBookingsComponent
      },
      {
        path: '**',
        redirectTo: 'settings'
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
