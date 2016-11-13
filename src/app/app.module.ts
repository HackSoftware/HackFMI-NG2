import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthService } from './auth/auth.service';
import { AuthHttp } from './auth/authHttp.service';

/* Routing Module */
import { appRoutes } from './app.routing';

/* Feature Modules */
import { LoginModule } from './login/login.module';
import { OnBoardingModule } from './onboarding/onboarding.module';
import { HomeModule } from './home/home.module';
import { TeamsModule } from './teams/teams.module';
import { MentorsModule } from './mentors/mentors.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,

    appRoutes,
    LoginModule,
    HomeModule,
    OnBoardingModule,
    TeamsModule,
    MentorsModule
  ],
  providers: [AuthService, AuthHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
