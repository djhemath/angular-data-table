import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datatable-poc';
  // public options: any;
  public editHandler : Function;
  public deleteHandler : Function;

  public columns = [
    {
      title: 'ID',
      visible: false
    },
    {
      title: 'Name'
    },
    {
      title: 'Price'
    },
    {
      title: 'Actions',
      searchable: false,
      sortable: false
    }
  ];

  public products = [
    {
      id: 1,
      name: 'Product1',
      price: 500
    },
    {
      id: 2,
      name: 'Product2',
      price: 1500
    },
    {
      id: 3,
      name: 'Product3',
      price: 2500
    },
    {
      id: 4,
      name: 'Product4',
      price: 3500
    },
    {
      id: 5,
      name: 'Product5',
      price: 4500
    },
    {
      id: 6,
      name: 'Product6',
      price: 6500
    },
    {
      id: 7,
      name: 'Product7',
      price: 7500
    },
    {
      id: 8,
      name: 'Product8',
      price: 8500
    },
    {
      id: 9,
      name: 'Product9',
      price: 9500
    },
    {
      id: 10,
      name: 'Product10',
      price: 10500
    },
    {
      id: 11,
      name: 'Product11',
      price: 11500
    },
    {
      id: 12,
      name: 'Product12',
      price: 12500
    },
    {
      id: 13,
      name: 'Product13',
      price: 13500
    },
    {
      id: 14,
      name: 'Product14',
      price: 14500
    },
    {
      id: 15,
      name: 'Product15',
      price: 15500
    },
  ];

  public options = {
    actions: {
      edit: {
        enable: true
      },
      delete: {
        enable: false
      }
    }
  };

  public edit(id) {
    console.log('Edit from APP: ', id);
  }
  public delete(id) {
    console.log('Edit from APP: ', id);
  }

  ngOnInit(): void {
    this.editHandler = this.edit.bind(this);
    this.deleteHandler = this.delete.bind(this);
  }
}
