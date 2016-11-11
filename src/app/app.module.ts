import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingService } from './onboarding/onboarding.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    OnboardingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    appRoutes,
  ],
  providers: [AuthService, OnboardingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
