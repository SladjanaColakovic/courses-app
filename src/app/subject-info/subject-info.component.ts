import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfDialogComponent } from '../pdf-dialog/pdf-dialog.component';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.css']
})
export class SubjectInfoComponent {

  constructor(private dialog: MatDialog) {

  }
  home = true;
  files = false;
  literature = false;
  pdfAdd = false;

  showHome() {
    this.home = true;
    this.files = false;
    this.literature = false;
    this.pdfAdd = false;
  }

  showFiles() {
    this.home = false;
    this.files = true;
    this.literature = false;
    this.pdfAdd = false;
  }

  showLiterature() {
    this.home = false;
    this.files = false;
    this.literature = true;
    this.pdfAdd = false;
  }

  addPdf() {
    this.home = false;
    this.files = false;
    this.literature = false;
    this.pdfAdd = true;
  }

  dropFile(event: any){
    console.log(event)
  }

  showPDF() {

    this.dialog.open(PdfDialogComponent, {
      width: '1300px',
      height: '700px',
      maxHeight: '700px',
      maxWidth: '180vh'

    });

  }
}
