import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule]
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {}

  getData() {
    this.apiService.getData().subscribe((data: any) => {
      console.log('Data received:', data);
    });
  }

  sendData() {
    const dataToSend = { message: 'Hello from Dashboard' };
    this.apiService.sendData(dataToSend).subscribe((response: any) => {
      console.log('Data sent:', response);
    });
  }
}
 