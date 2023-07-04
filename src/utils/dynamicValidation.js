import {
  string,
  email,
  object
} from "yup";
import * as yup from "yup";

/* Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  address: Yup.string(),
  company: Yup.string(),
})
 */

/* const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
); */
const dynamicValidationSchema = (formFields) => {
  const schema = {};

  formFields.forEach((field) => {
    const { name, validation, label } = field;
    if (validation && validation.length > 0) {
      let fieldSchema;
      if (validation.includes('string')) {
        fieldSchema = string();
      }
      if (validation.includes('required')) {
        fieldSchema = fieldSchema.required(`${label} is required`);
      }
      if (validation.includes('email')) {
        fieldSchema = fieldSchema.email();
      }
     /*  if (validation.includes('phone')) {
        fieldSchema = fieldSchema.matches(phoneRegex, "Invalid phone");
      } */

      schema[name] = fieldSchema;
    }
  });

  return object().shape(schema);
};



export { dynamicValidationSchema };
