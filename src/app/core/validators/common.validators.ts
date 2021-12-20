import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';

const decimal5to2Regex = /^(\d{1,5}|\d{1,5}\.\d{1,2})$/;
const decimal14to2Regex = /^(\d{1,14}|\d{1,14}\.\d{1,2})$/;
const decimal7to2Regex = /^(\d{1,7}|\d{1,7}\.\d{1,2})$/;
const nameFormatRegex = /^([0-9a-zA-Z \-,'&\.]*)$/;
const onlyIntegerRegex = /^[0-9]*$/;
const phoneNumberRegex = /^((\\+91-?)|0)?[0-9]{10}$/;
const accountNumberRegex = /^\d{9,18}$/;
const aadhaarRegex = /^[0-9]{12}$/;
const emailRegex =new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");
export class CommonValidators {

  // Validate Complete Form Group

  static validateFormGroup(formGroup: FormGroup) :void {
    if(!_.isNil(formGroup)) {
      Object.keys(formGroup.controls).forEach((key) => {
        const ctrl = formGroup.get(key);
        ctrl?.markAsTouched({ onlySelf: true })
      })
    }
  }
  //Decimal(5,2) validator
  static isDecimal5to2Validator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && decimal5to2Regex.test(value) !== true) {
      return {
        isDecimal5to2Validator:
          'Please enter proper Number format upto 5(digits) and two decimal places',
      };
    } else {
      return null;
    }
  }
  //Decimal(14,2) validator
  static isDecimal14to2Validator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && decimal14to2Regex.test(value) !== true) {
      return {
        isDecimal14to2Validator:
          'Please enter proper Number format upto 14(digits) and two decimal places',
      };
    } else {
      return null;
    }
  }

  //Decimal(7,2) validator
   static isDecimal7to2Validator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && decimal7to2Regex.test(value) !== true) {
      return {
        isDecimal7to2Validator:
          'Please enter proper Number format upto 7(digits) two decimal places',
      };
    } else {
      return null;
    }
  }

   static isNameFormatValidator(control: FormControl) {
    let value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && nameFormatRegex.test(value) !== true) {
      return {
        isNameFormatValidator: 'Please enter proper name format',
      };
    } else {
      return null;
    }
  }
  //Only Integer validator
   static isOnlyIntegerValidator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && onlyIntegerRegex.test(value) !== true) {
      return {
        isOnlyIntegerValidator: 'Please enter only integer value',
      };
    } else {
      return null;
    }
  }

  static emailValidator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && emailRegex.test(value) !== true) {
      return {
        emailValidator: 'Email Format should be XYZ@domain_name.extension',
      };
    } else {
      return null;
    }
  }

  static phoneNumberValidator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && phoneNumberRegex.test(value) !== true) {
      return {
        phoneNumberValidator: 'Please Enter 10 digit Number',
      };
    } else {
      return null;
    }
  }
  static accountNumberValidator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && accountNumberRegex.test(value) !== true) {
      return {
        accountNumberValidator: 'Bank Account Number have 9 to 18 digits',
      };
    } else {
      return null;
    }
  }
  static aadhaarNumberValidator(control: FormControl) {
    const value = control.value;
    /* Safe-side-check for null or undefined */
    if (!_.isNil(value) && aadhaarRegex.test(value) !== true) {
      return {
        aadhaarNumberValidator: 'Please Enter a 12 digit Number',
      };
    } else {
      return null;
    }
  }
}
