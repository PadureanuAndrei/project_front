import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserUpdateComponent} from "./user-update.component";

const routes: Routes = [
  {
    path: '',
    component: UserUpdateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUpdateRoutingModule {}
