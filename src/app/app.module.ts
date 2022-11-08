import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/modules/material.module";
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
