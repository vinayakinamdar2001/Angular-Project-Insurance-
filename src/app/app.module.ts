import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { CustomerComponent } from './customer/customer.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SummeryComponent } from './summery/summery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    PageheaderComponent,
    DashboardheaderComponent,
    CustomerComponent,
    InsuranceComponent,
    SummeryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
