import { IAuthenticationState } from '@/stores/sliceTypes/Authentication.type';
import { authenticationSelector } from '@/stores/slices/Authentication.slice';
import { pokemonSelector } from '@/stores/slices/Pokemon.slice';
import { useEffect, useState } from 'react';

type hookResponse = { isLoading: boolean; user: IAuthenticationState; error: any; isAuthenticated: boolean };
export function useAuth(): hookResponse {
  const [isLoading, setIsLoading] = useState(true);
  const authSlice = authenticationSelector();
  const pokeSlice = pokemonSelector();
  const isAuthenticated = isAuthValid(authSlice.token);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  console.log('AUTH', authSlice, pokeSlice);

  return { isLoading, user: authSlice, error: {}, isAuthenticated };
}

function isAuthValid(jwt: string): boolean {
  console.log('JWT', jwt);
  return !!jwt;
}
