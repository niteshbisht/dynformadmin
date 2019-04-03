import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '../../../models/field.interface';
import { DynamicFormComponent } from '../../common/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-feedback-collect',
  templateUrl: './feedback-collect.component.html',
  styleUrls: ['./feedback-collect.component.scss']
})
export class FeedbackCollectComponent implements OnInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  @Input() fieldArray: FieldConfig[] = [];
  @Input() formName: string = '';

  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      inputType: 'text',
      name: 'name',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ]
    },
    {
      type: 'input',
      label: 'Email Address',
      inputType: 'email',
      name: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email'
        }
      ]
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ]
    },
    {
      type: 'radiobutton',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
      value: 'Male'
    },
    {
      type: 'date',
      label: 'DOB',
      name: 'dob',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Date of Birth Required'
        }
      ]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US']
    },
    {
      type: 'checkbox',
      label: 'Accept Terms',
      name: 'term',
      value: true
    },
    {
      type: 'button',
      label: 'Save'
    }
  ];

  targetContent: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  submit(value: any) { }
}
