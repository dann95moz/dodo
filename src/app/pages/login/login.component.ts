import { Component, OnInit, inject } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(itemCollection).pipe(tap(console.log));
  }
  
  ngOnInit() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])
  item$: Observable<any[]>;
  firestore: Firestore = inject(Firestore);
  loginWithFacebook() {
  
  }
  loginWithGoogle() {
  
  }
 onSubmit () {
   
          // ..
      };

 
  }
  