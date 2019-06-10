import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  email='';
  photo='';
  password='';
  exception='';
  user: User;
  constructor(private fireService: FirebaseAuthService) { }

  ngOnInit() {
   
    //this.user = this.fireService.user
    
    this.fireService.authState$.subscribe((auth) => {
      this.user = auth   
    });
  }

  onKeyAvatar(event: any) { 
    this.photo = event.target.value;
  }
  onKeyEmail(event: any) { 
    this.email = event.target.value;
  }
  onKeyPassword(event: any) { 
    this.password = event.target.value;
  }

  changeEmail(){
    this.fireService.changeEmail(this.email).then(()=>{
      this.email='';
    }).catch((e)=>{
      
      console.log(e);
      this.exception = e.message;})
  }

  changeAvatar(){
    this.fireService.changeAvatar(this.photo).then(()=>{
      this.photo='';
    }).catch((e)=>{this.exception = e.message;})
  }

  changePassword(){
    this.fireService.changePassword(this.password).then(()=>{
      this.password='';
    }).catch((e)=>{this.exception = e.message;})
  }

}
