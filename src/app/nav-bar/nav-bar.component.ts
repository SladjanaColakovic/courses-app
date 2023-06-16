import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router){}

  openCourses() {
    this.router.navigate(['/courses'])
  }

  openProfile() {
    this.router.navigate(['/profile'])
  }

  openResults() {
    this.router.navigate(['/results'])
  }

  openTerms(){
    this.router.navigate(['/terms'])
  }

  openAddStudent(){
    this.router.navigate(['/addStudent']);
  }
}
