import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IphoneComponent } from './iphone/iphone.component';
import { DropdownbuttonComponent } from './dropdownbutton/dropdownbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    IphoneComponent,
    DropdownbuttonComponent 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
