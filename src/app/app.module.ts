import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { GuardModule } from './guard/guard.module';
import { LoginModule } from './login/login.module';
import { TeamsModule } from './teams/teams.module';
import { FooterModule } from './footer/footer.module';
import { MentorsModule } from './mentors/mentors.module';
import { InvitesModule } from './invites/invites.module';
import { NavigationModule } from './navigation/navigation.module';
import { OnBoardingModule } from './onboarding/onboarding.module';
import { CompetitorsModule } from './competitors/competitors.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,

    ToastModule,
    Angular2FontawesomeModule,

    AuthModule,
    CoreModule,
    HomeModule,
    GuardModule,
    LoginModule,
    TeamsModule,
    FooterModule,
    MentorsModule,
    InvitesModule,
    NavigationModule,
    OnBoardingModule,
    CompetitorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }