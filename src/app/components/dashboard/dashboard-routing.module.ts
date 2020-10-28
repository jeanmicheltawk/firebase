import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CustomersComponent } from '../customers/customers.component';
import { OrdersComponent } from '../orders/orders.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
          {
            path: '',
            redirectTo: 'about',
            pathMatch: 'full'
          },
          {
          path: 'orders',
          component: OrdersComponent
          },
          {
          path: 'about',
          component: AboutComponent
          },
          {
          path: 'customers',
          component: CustomersComponent
          },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
