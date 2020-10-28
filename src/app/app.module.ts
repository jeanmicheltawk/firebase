import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
=======
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> origin/jeanmichel

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    CustomersComponent,
    OrdersComponent
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
    ReactiveFormsModule
>>>>>>> origin/jeanmichel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
