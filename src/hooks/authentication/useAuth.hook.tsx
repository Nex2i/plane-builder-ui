import { IAuthenticationState } from '@/stores/sliceTypes/Authentication.type';
import { authenticationSelector } from '@/stores/slices/Authentication.slice';
import { useEffect, useState } from 'react';

type hookResponse = { user: IAuthenticationState; error: any; isAuthenticated: boolean };
export function useAuth(): hookResponse {
  const authSlice = authenticationSelector();
  const [isAuthenticated, setIsAuthenticated] = useState(() => isAuthValid(authSlice.token));

  useEffect(() => {
    setIsAuthenticated(isAuthValid(authSlice.token));
  }, [authSlice]);

  return { user: authSlice, error: {}, isAuthenticated };
}

function isAuthValid(jwt: string): boolean {
  return !!jwt;
}

export function isUserModelLocal(user: IAuthenticationState): boolean {
  return !!user.token && !!user.picture && !!user.email;
}
