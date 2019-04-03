import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminModule } from './components/admin/admin.module';
import { MaterialModule } from './components/common/material/material.module';
import { FeedbackModule } from './components/feedback-page/feedback-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    FeedbackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
