import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'data-table',
  templateUrl: './DataTable.component.html',
  styleUrls: ['./DataTable.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  title = 'datatable-poc';

  @ViewChild('dataTable') table: ElementRef;
  @Input() data: any;
  @Input() columns: any;
  @Input() options: any;
  public rowData: any[];
  dataTable: any;

  constructor() {
    
  }

  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }

  edit(id) {
    console.log("Edit: ", id)
  }

  ngOnInit(): void {
    console.log("ONINIT")
    this.rowData = this.data && this.data.map(datum => {
      let t = [];
      for(let d in datum) {
        if(true) {
          t.push(datum[d]);
        }
      }
      return t;
    });
    console.log("ROW DATA: ", this.rowData);
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.dataTable();
  }
}
