import { Navigate, RouteObject } from 'react-router-dom';
import { lazyImport } from '@/utils/lazyImport';

import { AuthCheckProvider } from '@/providers/AuthProviders';
import { logRoutes, pokemonRoutes, profileRoutes } from './RouteConstants';
import { LogRoutes } from '@/features/log/LogRoutes';
import { ProfileRoutes } from '@/features/profile/ProfileRoutes';
const { PokemonRoutes } = lazyImport(() => import('@/features/pokemon/PokemonRoutes'), 'PokemonRoutes');

export const AuthenticatedRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <AuthCheckProvider />,
    children: [
      {
        path: logRoutes.base + '/*',
        element: <LogRoutes />,
      },
      {
        path: profileRoutes.base + '/*',
        element: <ProfileRoutes />,
      },
      {
        path: pokemonRoutes.base + '/*',
        element: <PokemonRoutes />,
      },
      {
        path: '*',
        element: <Navigate to={'/auth'} />,
      },
    ],
  },
];
