import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Models/employee.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employer-data',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './employer-data.component.html',
  styleUrl: './employer-data.component.scss',
})
export class EmployerDataComponent {
  employees: Employee[] = [];

  currentEmployee: Employee = this.getEmptyEmployee();

  private emplyeeServ = inject(EmployeeService);

  public constructor() {
    this.emplyeeServ
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  getEmptyEmployee(): Employee {
    return {
      employeeId: 0,
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      city: '',
      address: '',
    };
  }
}
