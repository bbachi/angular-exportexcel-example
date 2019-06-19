import { TestBed } from '@angular/core/testing';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

import { ExportService } from './export.service';

describe('ExportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportService = TestBed.get(ExportService);
    expect(service).toBeTruthy();
  });
});
