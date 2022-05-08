export const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const emailValidator = (email: string): boolean => EMAIL_REGEX.test(email);

export const NUMBER_REGEX = /^[+]\d+/
export const phoneNumberValidator = (phoneNumber: string): boolean => NUMBER_REGEX.test(phoneNumber)
