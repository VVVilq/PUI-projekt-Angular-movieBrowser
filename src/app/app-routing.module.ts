import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { AboutComponent } from './components/about/about.component';
import { MovieBrowserComponent } from './components/movie-browser/movie-browser.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';



const routes: Routes = [
  { path: '',  component: LogInComponent},
  { path: 'login', component: LogInComponent },
  { path: 'registration',   component: RegisterComponent },
  { path: 'recovery', component: PasswordRecoveryComponent},
  
  {
    path: 'browse',
    component: MovieBrowserComponent,
    canActivate: [AuthGuardService],
  
  },{
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuardService],
  
  },
  {
    path: 'user',
    component: UserManagerComponent,
    canActivate: [AuthGuardService],
  
  },
  {
    path: 'movies/:movie_id',
    component: MovieDetailsComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
