import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'dashboard/:name', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
