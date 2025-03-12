import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  appointment: Appointment = {
    id: 1,
    title: "Take dog for a walk",
    date: new Date(),
  }
}
