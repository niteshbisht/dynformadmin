import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig, Validator } from '../../../models/field.interface';
import { AdminControlLoaderService } from 'src/app/admin-control-loader.service';


export class ConfigModel {
  selectedComponent: string = '';
  label: string = '';
  name: string = '';
  isRequired: boolean = false;
  isTextOnly: boolean = false;
  inputType: string = '';
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {

  model = new FieldConfig();
  inputTypes = {
    input: [
      'text',
      'email',
      'password'
    ]
  };

  validatorMap = new Map<string, Validator>();

  availableComponents: Array<string> = [
    'input',
    'button',
    'radiobutton',
    'date',
    'checkbox',
    'select'
  ];
  regConfig: Array<FieldConfig> = [];

  /* sampleForEdit = {
    data: [
      {
        "type": "input",
        "name": "fname",
        "label": "First Name",
        "isRequired": true,
        "inputType": "text",
        "isTextOnly": true,
        "validations": [
          {
            "name": "required",
            "message": "First Name"
          }, {
            "name": "pattern",
            "message": "Accepts Text Only"
          }
        ]
      },
      {
        "type": "input",
        "name": "lname",
        "label": "Last Name",
        "isRequired": true,
        "inputType": "text",
        "isTextOnly": true,
        "validations": [
          {
            "name": "required",
            "message": "Last Name"
          },
          {
            "name": "pattern",
            "message": "Accepts Text Only"
          }]
      }]
  }; */

  sampleForEdit = {
    data: []
  }

  configData = {
    data: [
    ]
  };

  private readonly TEXT_ONLY_PATTERN = '^[a-zA-Z]+$';

  private readonly TEXT_ONLY_MSG = 'Accepts Text Only';

  private readonly PASSWORD_REQD_MSG = 'Password is Required';

  private readonly EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  private readonly EMAIL_MSG = 'Invalid email';

  constructor(private cdref: ChangeDetectorRef,
    private adminControlLoaderService: AdminControlLoaderService) {
      
  }

  ngOnInit() {
    this.adminControlLoaderService.getMockData().subscribe(
      resp => {
        this.sampleForEdit.data = resp;
      }
    );
  }

  createValidator(name: string, inputType: string) {
    const validators = [];
    switch (inputType) {
      case 'email': validators.push(this.createRequiredValidators(name + ' is required'));
        validators.push(this.createPatternValidators(this.EMAIL_PATTERN, this.EMAIL_MSG));
        break;
      case 'password':
        validators.push(this.createRequiredValidators(this.PASSWORD_REQD_MSG));
        break;
      case 'date':
        validators.push(this.createRequiredValidators('Date of ' + name + 'is required.'));
        break;
      default: console.log('No Validators applied');
    }
    return validators;
  }

  loadModel(value) {
    debugger;
    const val = this.sampleForEdit.data.find(e => e.name === value);
    if (val) {
      this.model = val;
    } else {
      this.model = new FieldConfig();
    }
  }

  componentFieldChanged(value: string) {
    this.model = new FieldConfig();
    this.model.type = value;
    if (value === 'radiobutton' || value === 'select' || value === 'checkbox') {
      this.model.options = [''];
    }
  }

  updateOption(idx: number, updateType: string) {
    if (updateType === 'plus') {
      this.model.options.push('');
    } else {
      this.model.options.splice(idx, 1);
    }
  }

  changeField(value: string, fieldName: string) {
    this.model.inputType = value;
  }

  createPatternValidators(pattern: string, messageInfo: string) {
    const validator = {
      name: 'pattern',
      validator: Validators.pattern(
        pattern
      ),
      message: messageInfo
    };
    return validator;
  }

  createRequiredValidators(validatormessage: string) {
    const validator = {
      name: 'required',
      validator: Validators.required,
      message: validatormessage
    };
    return validator;
  }

  insertModelInConfig() {
    const recConf = [].concat(this.regConfig);
    this.model.validations = this.createValidator(this.model.name, this.model.inputType);
    if (this.model.isRequired) {
      this.model.validations.push(this.createRequiredValidators(this.model.label));
    }
    if (this.model.isTextOnly) {
      this.model.validations.push(this.createPatternValidators(this.TEXT_ONLY_PATTERN, this.TEXT_ONLY_MSG));
    }
    recConf.push(this.model);
    this.regConfig = recConf;
    this.configData.data = this.regConfig;
    this.model = new FieldConfig();
    this.model.type = '';
    this.cdref.detectChanges();
    console.log('Form => ', JSON.stringify(this.regConfig));
  }

  insertFormConfig(){
//     curl -X PUT "localhost:9200/twitter/_doc/1" -H 'Content-Type: application/json' -d'
// {
//     "user" : "kimchy",
//     "post_date" : "2009-11-15T14:12:12",
//     "message" : "trying out Elasticsearch"
// }
// '
    const payLoad = {
      formConfig: this.configData.data,
      post_date: new Date().toISOString()
    };
    this.adminControlLoaderService.insertFormConfigInElastic(payLoad).subscribe(res=> {
      console.log('Inserted Record in Elastic', JSON.stringify(res));
      this.regConfig = [];
      this.configData.data = [];
    });
  }

  updateOptionValue(value: string, index: number) {
    this.model.options[index] = value;
  }

  submit(event) {
    console.log(event);
  }
}
