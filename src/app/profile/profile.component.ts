import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  biography = false;
  userInfo = true;
  papers = false;

  showUserInfo(){
    this.userInfo = true;
    this.biography = false;
    this.papers = false;
  }

  showBiography(){
    this.biography = true;
    this.userInfo = false;
    this.papers = false;
  }

  showPapers(){
    this.papers = true;
    this.biography = false;
    this.userInfo = false;
  }
  

}
