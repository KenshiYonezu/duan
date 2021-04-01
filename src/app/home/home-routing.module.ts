import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInforComponent } from '@app/user-infor/user-infor.component';
import { HomeComponent } from './home.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: '', component: PagesComponent },
    { path: 'user-infor', component: UserInforComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
