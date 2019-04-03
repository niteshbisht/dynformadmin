export interface Validator {
  name: string;
  validator?: any;
  message: string;
}


export class FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  // tslint:disable-next-line: no-inferrable-types
  type: string = '';
  value?: any;
  isRequired?: boolean;
  validations?: Validator[];
  isTextOnly?: boolean;
}
