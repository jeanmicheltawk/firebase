import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { CardviewComponent } from './components/cardview/cardview.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    CardviewComponent,
    ListViewComponent,
    MapViewComponent,
    NewCustomerComponent,
    NewOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
