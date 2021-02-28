import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BackendService } from './backend.service';

import { CatalogModule } from './catalog/catalog.module';
import { HomeModule } from './home/home.module';
import { AppRouteModule } from './app-route/app-route.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CatalogModule,
    HomeModule,
    AppRouteModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
