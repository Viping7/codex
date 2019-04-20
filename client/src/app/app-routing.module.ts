import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementComponent } from './element/element.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component: DashboardComponent
  },
  {
    path:"component/:id",
    component: ElementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
