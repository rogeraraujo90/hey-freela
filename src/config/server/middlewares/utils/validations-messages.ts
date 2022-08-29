export const notEmptyMessage = (field: string) => `'${field}' cannot be blank`;

export const isAlphaMessage = (field: string) =>
  `'${field}' must contain only letters`;

export const isNumericMessage = (field: string) =>
  `'${field}' must be an integer and not contain leading zeroes`;

export const existsMessage = (field: string) => `'${field}' is required`;

export const isEmailMessage = (field: string) =>
  `'${field}' must be a valid email`;

export const isStrongPasswordMessage = (field: string) =>
  `'${field}' must have at least 8 characters, 1 lowercase, 1 uppercase, 1 number, and 1 special character`;

export const areEqualMessage = (field: string, compareField: string) =>
  `${field} is not equal to ${compareField}`;
