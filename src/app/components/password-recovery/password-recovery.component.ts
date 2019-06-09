import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  exception: string;
  message: string = "type your email";
  reactiveForm: FormGroup;

  constructor(private fireAuth:FirebaseAuthService){ }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.maxLength(512),Validators.email]),
    })
  }

  sendEmail(){
    this.fireAuth.retrievePassword(this.reactiveForm.get("email").value).catch((e)=>{
      this.exception = e.message;
    })
    console.log("wyslany email")
  }
  
  
 
  
  
}
