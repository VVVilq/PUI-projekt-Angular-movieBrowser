import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  exception: string;
  reactiveForm: FormGroup;

  constructor(private fireAuth: FirebaseAuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      login: new FormControl(''),
      email: new FormControl('', [Validators.required,Validators.maxLength(512),Validators.email]),
      password: new FormControl('', [Validators.required,Validators.maxLength(512)]),
    })
  }
  
  registerUser(){
    this.fireAuth.register(this.reactiveForm.get("login").value,this.reactiveForm.get("email").value,
    this.reactiveForm.get("password").value).then(()=>{
      this.exception = '';
    }).catch((e)=>{
      this.exception = e.message;
    })
  }

}
