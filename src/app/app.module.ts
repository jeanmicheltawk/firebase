import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
=======
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> origin/jeanmichel
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './components/dashboard/dashboard.module';
>>>>>>> jeanmichel

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule
=======
    NgbModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
>>>>>>> origin/jeanmichel
=======
    ReactiveFormsModule,
    DashboardModule
>>>>>>> jeanmichel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
