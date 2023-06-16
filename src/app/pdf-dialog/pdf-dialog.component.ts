import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.css']
})
export class PdfDialogComponent {

  @HostListener('window:resize', ['$event'])
  onResize() {

    const obj = window.document.getElementById('pdf')
    if (obj == null) {

    } else {
      obj.setAttribute('zoom', 'reset')
      obj.parentNode?.replaceChild(obj.cloneNode(true), obj)
    }
  }
}
