import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { ResultsComponent } from './results/results.component';
import { TermsComponent } from './terms/terms.component';
import { SubjectInfoComponent } from './subject-info/subject-info.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'subjectInfo', component: SubjectInfoComponent},
  {path: 'addStudent', component: AddStudentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
