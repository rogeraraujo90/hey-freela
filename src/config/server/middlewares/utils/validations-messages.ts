export const notEmptyMessage = (field: string) => `${field} cannot be blank`;

export const isAlphaMessage = (field: string) =>
  `${field} must contain only letters`;

export const isNumericMessage = (field: string) =>
  `${field} must be an integer and not contain leading zeroes`;
