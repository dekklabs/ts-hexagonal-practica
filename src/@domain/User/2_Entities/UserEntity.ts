export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export default class UserEntity {
  private _id: number;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _website: string;

  constructor(params: IUser) {
    this._id = params.id;
    this._name = params.name;
    this._email = params.email;
    this._phone = params.phone;
    this._website = params.website;
  }

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      phone: this._phone,
      website: this._website,
    };
  }
}
