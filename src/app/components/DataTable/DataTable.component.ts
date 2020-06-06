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
  @Input() editHandler: Function;
  @Input() deleteHandler: Function;
  public rowData: any[];
  dataTable: any;

  ngAfterViewInit() {
    const that = this;
    this.rowData = this.data && this.data.map(datum => {
      let t = [];
      let id;
      for(let d in datum) {
        if(true) {
          if(d === 'id') {
            id = datum[d];
          }
          t.push(datum[d]);
        }
      }
      let actions = ``;
      if(this.options.actions.edit.enable) {
        actions += `<i data-id="${id}" class="fa fa-edit edit-dt action-item"></i>`;
      }
      if(this.options.actions.delete.enable) {
        actions += `<i data-id="${id}" class="fa fa-trash delete-dt action-item"></i>`;
      }
      t.push(actions);
      return t;
    });

    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable({
      columns: this.columns,
      data: this.rowData
    });

    this.addEventListeners()

    this.dataTable.on('draw.dt', function(e, settings, len) {
      that.addEventListeners()
    })
  }

  addEventListeners() {
    document.querySelectorAll('.edit-dt').forEach(doc => doc.addEventListener('click', (e)=> this.edit(e)))
    document.querySelectorAll('.delete-dt').forEach(doc => doc.addEventListener('click', (e)=> this.delete(e)))
  }

  edit(e) {
    this.editHandler(e.target.getAttribute('data-id'));
  }

  delete(e) {
    this.deleteHandler(e.target.getAttribute('data-id'));
  }

  ngOnInit(): void {

  }

  constructor() {

  }
}
