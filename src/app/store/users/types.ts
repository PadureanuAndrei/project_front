export interface UserModel {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  photo?: number;
}

export interface UserUpdate {
  email?: string;
  name?: string;
  phoneNumber?: string;
  password?: string;
  photo?: string;
}
