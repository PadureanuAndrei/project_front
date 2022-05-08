export interface LoginModel {
  email: string;
  password: string;
}

export interface RegistrationModel {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}

export interface UserModel {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  photo?: number;
}
