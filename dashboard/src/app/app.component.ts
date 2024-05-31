import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AnnouncementComponent } from './announcement/announcement.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LoginComponent, SidebarComponent, DashboardComponent, CalendarComponent, AnnouncementComponent]
})
export class AppComponent implements OnInit {
  title = 'dashboard';

  
  ngOnInit(): void{
  const burger = document.getElementsByClassName('burger__btn')[0] as HTMLElement;
  const leftNav = document.getElementsByClassName('left__nav')[0] as HTMLElement;
  burger.onclick = function () {
    leftNav.classList.toggle('active');
  };
}
}
