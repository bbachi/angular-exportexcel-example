import { Component, OnInit, Input } from '@angular/core';
import {ExportService} from '../_services/export.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private exportService: ExportService) { }

  @Input() customers: any;

  ngOnInit() {
    this.exportService.exportAsExcelFile(this.customers, 'customers');
  }

}
