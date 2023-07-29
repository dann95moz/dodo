import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
 
   }
  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  loginWithFacebook() {
  
  }
  loginWithGoogle() {
  
  }
 onSubmit () {
   
          // ..
      };

 
  }
  