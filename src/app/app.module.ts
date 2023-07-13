import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { ServiceComponent } from './components/service/service.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { StudendIdComponent } from './components/studend-id/studend-id.component';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
    ConversionComponent,
    BmiComponent,
    ServiceComponent,
    PipesComponent,
    StudendIdComponent,
    UserInputsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
