import { Component, OnInit } from '@angular/core';
import {ExportService} from './_services/export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-exportexcel-example';

  customers: any = [];
  constructor(private exportService: ExportService) {}

  ngOnInit() {
    for (let i = 0; i <= 25; i++) {
      this.customers.push({firstName: `first${i}`, lastName: `last${i}`,
      email: `abc${i}@gmail.com`, address: `000${i} street city, ST`, zipcode: `0000${i}`});
    }
  }

  export() {
    this.exportService.exportExcel(this.customers, 'customers');
  }
}
