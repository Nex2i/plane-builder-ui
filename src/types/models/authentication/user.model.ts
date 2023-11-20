import { IBaseModel } from '../base.model';

export interface UserModel extends IBaseModel {
  email: string;
  authId: string;
  id: string;
  token: string;
  picture: string;
}
