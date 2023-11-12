import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoadingComponent } from '@/components/loading/Loading.Component';
import { useLogin } from '@/hooks/authentication/useLogin.hook';
import { useAuth } from '@/hooks/authentication/useAuth.hook';

interface AuthCheckProviderProps {}

export const AuthCheckProvider: FC<AuthCheckProviderProps> = ({}) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  const [logoutSession, setLogoutSession] = useState<boolean>(false);

  // useLogout(logoutSession, setIsFetching);

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated && user) {
      setLogoutSession(false);
    }

    if (!isAuthenticated) {
      setLogoutSession(true);
    }
  }, [isAuthenticated, isLoading, user]);

  if (isLoading) return <LoadingComponent loadingText="Authenticating User" />;

  return isAuthenticated ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to={'/auth'} />
  );
};
