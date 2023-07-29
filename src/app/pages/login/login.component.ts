import { Component, OnInit, inject } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: Auth) {
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
    const provider = new FacebookAuthProvider()
    signInWithPopup(this.auth, provider).then((response) => { console.log(response);
    })
  }
  loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider).then((response) => { console.log(response);
    })
  }
 onSubmit () {
   
          // ..
      };

 
  }
  