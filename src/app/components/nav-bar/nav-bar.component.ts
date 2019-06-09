import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: User = null;
  constructor(private router: Router,private fireAuth: FirebaseAuthService) { }
  
  ngOnInit() {
    this.fireAuth.authState$.subscribe((auth) => {
      this.user = auth
      if(auth){
        this.router.navigate(['/about']);
      }else{
        this.router.navigate(['/login']);
      }
    });
    
  }

  logOut(){
    this.fireAuth.logout()
  }

}
