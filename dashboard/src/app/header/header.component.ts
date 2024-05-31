import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { RightContentblockComponent } from "../right-contentblock/right-contentblock.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AnnouncementComponent } from "../announcement/announcement.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [RightContentblockComponent, CalendarComponent, DashboardComponent, AnnouncementComponent]
})
export class HeaderComponent implements OnInit {
  votePercentage1 = 75;
  votePercentage2 = 25;
  votePercentaged = 75;
  votes = 9832;
  currentImage: string = 'image1';
  

  constructor() { }

  ngOnInit(): void {
  }
  
  

  
  setWidthById(elementId: string, newWidth: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.width = newWidth;
    } else {
        console.error(`Element with id "${elementId}" not found.`);
    }
}

  vote(): void {
    const imageElement = document.getElementById('image1') as HTMLImageElement;

    if (imageElement && imageElement.src.endsWith('public/line-chart-check.svg')) {
      if (this.votePercentage1 < 100) {
        this.votePercentage1++;
      }
    } else {
      if (this.votePercentage1 > 0) {
        this.votePercentage1--;
      }
    }

    this.votes++;
    this.votePercentage2 = 100 - this.votePercentage1;

    if (this.votePercentage1 > this.votePercentage2) {
      this.votePercentaged = this.votePercentage1;
    } else {
      this.votePercentaged = this.votePercentage2;
    }

    this.setWidthById('dynamicLine_orange',this.votePercentage1.toString() + "%")
    this.setWidthById('dynamicLine_purple',this.votePercentage2.toString() + "%")
  }
  
  changeImage(imageId: string): void {
    const imageElement = document.getElementById(imageId) as HTMLImageElement;

    if (this.currentImage === imageId) {
      return;
    }

    imageElement.src = "/public/line-chart-check.svg";
    const previousImageElement = document.getElementById(this.currentImage) as HTMLImageElement;
    previousImageElement.src = "/public/line-chart-not-check.svg";
    this.currentImage = imageId;
  }

  

  
}