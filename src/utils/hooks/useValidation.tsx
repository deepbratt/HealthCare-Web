import { useState } from 'react';
import { fieldNames } from '../constants/formConstants';
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
  validateConfirmPassword,
} from '../helperfunctions/validations';

const useValidation = (values: any) => {
  const [errors, setErrors] = useState(values);
  const [error] = useState(false);
  const validate = (fieldValues = values, method?: string) => {
    let temp = { ...errors };

    if (fieldNames.email in fieldValues) {
      temp.email = validateEmail(fieldValues.email);
    }
    if (fieldNames.name in fieldValues) {
      temp.name = validateName(fieldValues.name);
    }
    if (fieldNames.phone in fieldValues) {
      temp.phone = validatePhone(fieldValues.phone);
    }
    if (fieldNames.password in fieldValues) {
      temp.password = validatePassword(fieldValues.password);
    }
    if (fieldNames.confirmPassword in fieldValues) {
      temp.confirmPassword = validateConfirmPassword(
        fieldValues.confirmPassword,
        fieldValues.password
      );
    }

    setErrors({
      ...temp
    });

    return Object.values(temp).every((x) => x === '');
  };
  return {
    error,
    validate,
    errors,
    setErrors
  };
};

export default useValidation;