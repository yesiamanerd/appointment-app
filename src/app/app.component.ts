import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppointmentListComponent} from "./appointment-list/appointment-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppointmentListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment-app';
}
