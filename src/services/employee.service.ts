import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../Models/employee.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees = new BehaviorSubject<Employee[]>([]);

  public http = inject(HttpClient);

  getEmployees(): Observable<Employee[]> {
    // return this.employees.asObservable();
    return this.http.get<Employee[]>(
      'https://localhost:7092/api/EmployeeModels'
    );
  }

  //without interacting with DB
  addEmployee(employee: Employee): void {
    const currentEmployees = this.employees.value;
    const newId = Math.max(...currentEmployees.map((e) => e.employeeId), 0) + 1;
    this.employees.next([
      ...currentEmployees,
      { ...employee, employeeId: newId },
    ]);
  }

  //without interacting with DB
  updateEmployee(employee: Employee): void {
    const currentEmployees = this.employees.value;
    const index = currentEmployees.findIndex(
      (e) => e.employeeId === employee.employeeId
    );
    if (index !== -1) {
      currentEmployees[index] = employee;
      this.employees.next([...currentEmployees]);
    }
  }

  //without interacting with DB
  deleteEmployee(id: number): void {
    const currentEmployees = this.employees.value;
    this.employees.next(currentEmployees.filter((e) => e.employeeId !== id));
  }
}
