import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
  imports: [CommonModule]
})
export class AnnouncementComponent implements OnInit, OnDestroy {
  announcements: string[] = [];
  private announcementSub: Subscription | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAnnouncements();
    this.announcementSub = this.apiService.getAnnouncementUpdateListener().subscribe(() => {
      this.getAnnouncements();
    });
  }

  ngOnDestroy() {
    if (this.announcementSub) {
      this.announcementSub.unsubscribe();
    }
  }

  getAnnouncements() {
    this.announcements = []; // Очищаем текущие данные
    this.apiService.getData().subscribe((data: any) => {
      this.announcements = data.map((item: any) => item.message);
    });
  }
}
