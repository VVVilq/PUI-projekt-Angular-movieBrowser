import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthGuardService } from './services/auth-guard.service';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { MovieBrowserComponent } from './components/movie-browser/movie-browser.component';
import { FirebaseAuthService } from './services/firebase-auth.service';
import {HttpClientModule} from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { ToWatchComponent } from './components/to-watch/to-watch.component';
import { FirebaseDataService } from './services/firebase-data.service';
import { AngularFireDatabaseModule   } from 'angularfire2/database';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    NavBarComponent,
    PasswordRecoveryComponent,
    AboutComponent,
    MovieBrowserComponent,
    MovieDetailsComponent,
    UserManagerComponent,
    ToWatchComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule ,
    HttpClientModule
  ],
  providers: [AuthGuardService,FirebaseAuthService,MovieService,FirebaseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
