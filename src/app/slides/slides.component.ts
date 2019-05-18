import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent {
  images: string[] = [1, 2, 3].map(this.getImgUrl);

  constructor() {
  }
  getImgUrl(imageId: number): string {
    return `../../assets/images/img${imageId}.svg`;
  }
}
