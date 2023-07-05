export const formFields = [
  {
    type: "text",
    label: "Name",
    name: "name",
    id: "name",
    placeholder: 'Enter your name',
    defaultValue: '',
    validation: ["string", "required"],
  },
  {
    id: 'email',
    type: "email",
    label: "Email",
    placeholder: 'Enter your email',
    name: "email",
    defaultValue: '',
    validation: ["string", "email"],
  },
  {
    id: 'phone',
    type: "text",
    label: "Phone Number",
    placeholder: 'Enter your phone',
    name: "phone",
    defaultValue: '',
    validation: ["string", "phone", "required"],
  },
  {
    type: "text",
    label: "Address",
    name: "address",
    placeholder: 'Enter your address',
    id: "address",
    defaultValue: '',
    validation: ["string"],
  },
  {
    type: "text",
    label: "Company",
    name: "company",
    placeholder: 'Enter your company',
    id: "company",
    defaultValue: '',
    validation: ["string"],
  },
];