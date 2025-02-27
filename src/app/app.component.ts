import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgGridComponent } from '../ag-grid/ag-grid.component';

@Component({
  selector: 'app-root',
  imports: [AgGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular19test';
}
