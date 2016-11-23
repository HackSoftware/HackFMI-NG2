import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

/* Routing Module */
import { appRoutes } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthHttp } from './auth/authHttp.service';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { GuardModule } from './guard/guard.module';
import { LoginModule } from './login/login.module';
import { TeamsModule } from './teams/teams.module';
import { MentorsModule } from './mentors/mentors.module';
import { InvitesModule } from './invites/invites.module';
import { OnBoardingModule } from './onboarding/onboarding.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ToastModule,

    appRoutes,
    CoreModule,
    HomeModule,
    GuardModule,
    LoginModule,
    TeamsModule,
    MentorsModule,
    InvitesModule,
    OnBoardingModule,
  ],
  providers: [AuthService, AuthHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
