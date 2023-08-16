import {
  string,
  object,
  email
} from "yup";

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
        fieldSchema = fieldSchema.email('Invalid email');
      }

      schema[name] = fieldSchema;
    }
  });

  return object().shape(schema);
};



export { dynamicValidationSchema };
