import { NgModule } from '@angular/core';
import { FeedbackCollectComponent } from './feedback-collect/feedback-collect.component';
import { MaterialModule } from '../common/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormComponent } from '../common/dynamic-form/dynamic-form.component';
import { InputComponent } from '../common/input/input.component';
import { ButtonComponent } from '../common/button/button.component';
import { SelectComponent } from '../common/select/select.component';
import { DateComponent } from '../common/date/date.component';
import { RadiobuttonComponent } from '../common/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../common/checkbox/checkbox.component';
import { DynamicFieldDirective } from '../common/dynamic-field/dynamic-field.directive';

@NgModule(
  {
    imports: [
      MaterialModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
    ],
    declarations: [
      FeedbackCollectComponent,
      InputComponent,
      ButtonComponent,
      SelectComponent,
      DateComponent,
      RadiobuttonComponent,
      CheckboxComponent,
      DynamicFieldDirective,
      DynamicFormComponent,
    ],
    exports: [
      FeedbackCollectComponent,
      InputComponent,
      ButtonComponent,
      SelectComponent,
      DateComponent,
      RadiobuttonComponent,
      CheckboxComponent,
      DynamicFieldDirective,
      DynamicFormComponent,
    ],
    entryComponents: [
      InputComponent,
      ButtonComponent,
      SelectComponent,
      DateComponent,
      RadiobuttonComponent,
      CheckboxComponent
    ]
  }
)
export class FeedbackModule {

}