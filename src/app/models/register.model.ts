export interface RegisterModel {
  email: string;
  username: string;
  password: string;
  phone: string;
  name: Name;
  address: Address;

}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Name {
  firstname: string;
  lastname: string;
}
