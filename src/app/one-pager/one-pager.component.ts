import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-one-pager',
  templateUrl: './one-pager.component.html',
  styleUrls: ['./one-pager.component.scss']
})
export class OnePagerComponent {

  public printMode: boolean = false;

  download() {
    const pdf = new jsPDF();
    const contentSections = Array.from(document.querySelectorAll('[id^="content-section-"]'));

    this.printMode = true;
    const originalWidth = document.body.style.width;  // Store the original width
    document.body.style.width = '1200px';  // Set the body width to the desired value

    // Map each content section to a promise that resolves to an object containing the imgData and dimensions
    const canvasPromises = contentSections.map((element, index) =>
      html2canvas(element as HTMLElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210;  // dimensions of an A4 page
        const imgHeight = canvas.height * imgWidth / canvas.width;
        return { imgData, imgWidth, imgHeight, index };
      })
    );


    // Wait for all canvas rendering promises to resolve
    Promise.all(canvasPromises).then(imagesData => {
      imagesData.forEach((imageData, index) => {
        if (index > 0) {
          pdf.addPage();  // Add a new page for all sections except the first
        }
        // Adjust x and y positions to center the content
        const x = (210 - imageData.imgWidth) / 2;
        const y = 0;
        pdf.addImage(imageData.imgData, 'PNG', x, y, imageData.imgWidth, imageData.imgHeight);
      
      });
      pdf.save('mathias-ewald.pdf');
      this.printMode = false;
      document.body.style.width = originalWidth;
    });

  }

}
