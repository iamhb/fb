import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

import {NgForm} from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IncomeComponent } from './income/income.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TablesComponent } from './tables/tables.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    IncomeComponent,
    SignupFormComponent,
    TablesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
