import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datatable-poc';
  public options: any;

  public columns = [
      'ID',
      'Name',
      'Price',
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
    }
  ];

  public edit(name) {
    console.log("Edit from APP: ", name);
  }

  constructor() {
    const that = this;
    this.options = {
      actions: {
        enable: true,
        actions: [
          {
            type: 'edit',
            function: that.edit
          }
        ]
      }
    };
  }
}
