import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  standalone: true,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [CommonModule]
})
export class CalendarComponent implements OnInit {
  username: string | null = null;

  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsername().subscribe(name => {
      this.username = name;
    });
  }

  getData() {
    if (this.username) {
      this.apiService.getData().subscribe((data: any) => {
        console.log('Data received:', data);
      });
    } else {
      console.log('Please login to access this feature.');
    }
  }

  sendData() {
    if (this.username) {
      const dataToSend = { message: 'Hello from Calendar' };
      this.apiService.sendData(dataToSend).subscribe((response: any) => {
        console.log('Data sent:', response);
        this.apiService.triggerAnnouncementUpdate();
      });
    } else {
      console.log('Please login to access this feature.');
    }
  }
}
