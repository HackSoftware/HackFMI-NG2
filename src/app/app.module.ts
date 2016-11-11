import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { appRoutes } from './app.routing';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

/* Feature Modules */
import { TeamsModule } from './teams/teams.module';
import { OnBoardingModule } from './onboarding/onboarding.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    appRoutes,
    HomeModule,
    TeamsModule,
    OnBoardingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
