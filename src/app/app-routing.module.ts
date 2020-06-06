import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './components/DataTable/DataTable.component';


const routes: Routes = [
  // {
  //   path : '',
  //   redirectTo: 'data-table',
  //   pathMatch: 'full'
  // },
  {
    path : 'data-table',
    component: DataTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
