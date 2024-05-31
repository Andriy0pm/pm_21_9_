import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { DashboardComponent } from "../dashboard/dashboard.component";


@Component({
    selector: 'app-right-contentblock',
    standalone: true,
    templateUrl: './right-contentblock.component.html',
    styleUrl: './right-contentblock.component.scss',
    imports: [CommonModule, DashboardComponent]
})
export class RightContentblockComponent  {
  
}
