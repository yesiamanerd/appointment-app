import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';

/**
 * AppointmentListComponent - A standalone Angular component that manages a list of appointments
 * This component handles creating, displaying, and deleting appointments
 */
@Component({
  selector: 'app-appointment-list', // The HTML selector used to place this component
  standalone: true, // Indicates this is a standalone component (new Angular feature)
  imports: [CommonModule, FormsModule], // Required modules for common Angular features and form handling
  templateUrl: './appointment-list.component.html', // Link to the HTML template
  styleUrls: ['./appointment-list.component.css'] // Link to the component's styles
})
export class AppointmentListComponent {

  // Properties to store the new appointment details from the form
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  
  // Array to store all appointments
  appointments: Appointment[] = []

  /**
   * Adds a new appointment to the list
   * - Validates that title is not empty and date is set
   * - Creates a new appointment object with unique ID
   * - Adds it to the appointments array
   * - Resets the form fields
   * - Saves the updated list to localStorage
   */
  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(), // Creates a unique ID using current timestamp
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      // Reset form fields after successful addition
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      // Persist appointments to browser's localStorage
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  /**
   * Deletes an appointment from the list
   * @param index - The index of the appointment to delete in the appointments array
   * - Removes the appointment at the specified index
   * - Updates localStorage with the modified list
   */
  deleteAppointment(index: number){
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
