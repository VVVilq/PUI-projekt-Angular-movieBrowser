import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User,auth } from 'firebase';
import { Observable } from 'rxjs/index';


 
export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
 
  constructor(private fireAuth: AngularFireAuth) {}
 
  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }
 
  login(email, password) {
    return this.fireAuth.auth.setPersistence(auth.Auth.Persistence.SESSION).then(() => {
      return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    });
  }
 
  register(login,email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password).then(()=>{
      this.fireAuth.auth.currentUser.updateProfile({
        displayName: login,
        photoURL: "http://laurauinteriordesign.com/wp-content/uploads/2018/03/avatar-placeholder.png"
      })
    });
  }
 
  logout() {
    return this.fireAuth.auth.signOut();
  }

  retrievePassword(emailAddress){
    return this.fireAuth.auth.sendPasswordResetEmail(emailAddress);
  }
}
