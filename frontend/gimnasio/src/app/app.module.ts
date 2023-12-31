import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login/login.service';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
