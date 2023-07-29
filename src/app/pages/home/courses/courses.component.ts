import { Component } from '@angular/core';
import {  signOut } from 'firebase/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent {
  constructor(private router: Router, private auth:Auth){}
  logout() {
    signOut(this.auth).then(() => {
    
      this.router.navigate(['/login']);
    })
}
}
