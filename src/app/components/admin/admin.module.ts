import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { FeedbackModule } from '../feedback-page/feedback-page.module';
import { AdminControlLoaderService } from 'src/app/admin-control-loader.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeedbackModule,
    HttpClientModule
  ],
  providers: [AdminControlLoaderService]
})
export class AdminModule { }
