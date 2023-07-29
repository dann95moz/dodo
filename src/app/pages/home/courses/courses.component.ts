import { Component } from '@angular/core';
import {  signOut } from 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent {
  constructor(private router: Router){}
  logout() {

}
}
