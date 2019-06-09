import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  user: User;
  constructor(private fireService: FirebaseAuthService) { }

  ngOnInit() {
    console.log("dupa")
    this.user = this.fireService.user
    console.log(this.user);
  }

}
