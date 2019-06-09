import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  exception: string;
  reactiveForm: FormGroup;

  constructor(private fireAuth: FirebaseAuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.maxLength(512),Validators.email]),
      password: new FormControl('', [Validators.required,Validators.maxLength(512)]),
    })
  }

  logInUser(){
    this.fireAuth.login(this.reactiveForm.get("email").value,
    this.reactiveForm.get("password").value).then(()=>{
      this.exception = '';
    }).catch((e)=>{
      this.exception = e.message;
    })
    
  }
}
