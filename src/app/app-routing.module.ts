import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SummeryComponent } from './summery/summery.component';

const routes: Routes = [
  {path:"customer", component:CustomerComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"dashboardheader", component:DashboardheaderComponent},
  {path:"home-page", component:HomePageComponent},
  {path:"insurance", component:InsuranceComponent},
  {path:"pageheader", component:PageheaderComponent},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:SignupComponent},
  {path:"summery", component:SummeryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
