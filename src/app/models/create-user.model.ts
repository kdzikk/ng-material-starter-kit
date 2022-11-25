export interface CreateUserModel {
  readonly id:string;
  readonly name: Name;
  readonly email:string;

}

interface Name{
  readonly firstname:string;
  readonly lastname:string;
}
