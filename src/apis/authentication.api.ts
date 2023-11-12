import { BaseRepository } from '@/apis/base.repository';
import HttpClient from '@/libs/http/http.client';
import { UserModel } from '@/types/models/authentication/user.model';

const strategies = {
  bearer: 'bearer',
} as const;
type User = unknown;

interface IAuthenticationApi {
  login: (username: string, password: string) => Promise<UserModel>;
  registerNewUser: (user: User) => Promise<UserModel>;
  logout: () => Promise<void>;
}

export class AuthenticationApi extends BaseRepository implements IAuthenticationApi {
  login = async (username: string, password: string): Promise<UserModel> => {
    return HttpClient.post(`${this.apiUrl}/api/auth/v1/open/passport`, {
      strategy: strategies.bearer,
      strategyId: username,
      password,
    });
  };

  getLoggedInUser = async (): Promise<UserModel> => {
    return HttpClient.get(`${this.apiUrl}/api/auth/v1/protected/`);
  };

  registerNewUser = async (user: User): Promise<UserModel> => {
    return HttpClient.post(`${this.apiUrl}/api/auth/v1/open/user`, { ...user });
  };

  logout = async (): Promise<void> => {
    return HttpClient.delete(`${this.apiUrl}/api/auth/v1/open/logout`);
  };
}
