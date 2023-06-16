import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {

  showReservedTerms = true;
  showTerms = false;
  addTerm = false;
  
  showReservedTermsFunc(){
    this.showReservedTerms = true;
    this.showTerms = false;
    this.addTerm = false;
  }

  showTermsFunc(){
    this.showReservedTerms = false;
    this.showTerms = true;
    this.addTerm = false;

  }

  showAddTerm(){
    this.addTerm = true;
    this.showReservedTerms = false;
    this.showTerms = false;
  }

}
