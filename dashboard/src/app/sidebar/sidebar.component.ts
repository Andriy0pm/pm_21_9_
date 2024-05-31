import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {
  username: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsername().subscribe(name => {
      this.username = name;
    });
  }
}
