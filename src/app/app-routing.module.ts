import { NgModule } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/announcements/announcements.module').then(m => m.AnnouncementsModule)
  },
  {
    path: 'announcements/:id',
    loadChildren: () => import('./views/announcement/announcement.module').then(m => m.AnnouncementModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./views/upload/upload.module').then(m => m.UploadModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'user/update',
    loadChildren: () => import('./views/user-update/user-update.module').then(m => m.UserUpdateModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./views/account/account.module').then(m => m.AccountModule),
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule {}
