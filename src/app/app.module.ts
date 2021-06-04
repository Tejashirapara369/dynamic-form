import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDirective } from './directives/demo.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PopupComponent } from './popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicContorlsComponent } from './dynamic-form/dynamic-contorls/dynamic-contorls.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  declarations: [
    AppComponent,
    DemoDirective,
    UnlessDirective,
    PopupComponent,
    DynamicFormComponent,
    DynamicContorlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DatePickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
