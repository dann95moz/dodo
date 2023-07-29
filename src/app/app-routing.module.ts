import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/home/courses/courses.component';
import { MentorsComponent } from './pages/home/mentors/mentors.component';
import { PlansComponent } from './pages/home/plans/plans.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
      path: 'login', component: LoginComponent
    },
    { path: 'home', component: HomeComponent , children: [
      { path: 'courses', component: CoursesComponent },
      { path: 'mentors', component: MentorsComponent },
      {path: 'plans', component: PlansComponent },
    ] },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
