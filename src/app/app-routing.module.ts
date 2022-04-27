import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramDashboardComponent } from './instagram-dashboard/instagram-dashboard.component';
import { LoginInstaComponent } from './login-insta/login-insta.component';

const routes: Routes = [
  {path:'login',component:LoginInstaComponent},
  {path:'instagram',component:InstagramDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
