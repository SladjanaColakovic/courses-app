import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(private router: Router){}

  showSubjectInfo(){
    this.router.navigate(['/subjectInfo'])
  }
}
