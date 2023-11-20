import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '@/apis/api.context';
import { homeRoute } from '@/routes/RouteConstants';
import { setSnackbarProps } from '@/stores/slices/SnackBar.slice';
import { useAppDispatch } from '@/stores/store.hooks';
import { UserModel } from '@/types/models/authentication/user.model';
import { useAuth } from './useAuth.hook';

export function useRegisterUser(submitRegistration: boolean, setIsFetching: (fetching: boolean) => void) {
  const apis = useContext(ApiContext);
  const navigate = useNavigate();
  const { user } = useAuth();

  const [userModel, setUserModel] = useState<UserModel>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isMounted = true;
    if (!submitRegistration) return;
    if (!user?.token) return;

    setIsFetching(true);

    user &&
      apis.authentication
        .registerNewUser({ name: 'TEST' })
        .then((res) => {
          if (!isMounted) return;

          setUserModel(res);
          dispatch(
            setSnackbarProps({
              open: true,
              message: 'New User Successfuly Created',
              severity: 'success',
            })
          );
          navigate(homeRoute + '?action=new-user');
        })
        .catch((err) => {
          if (!isMounted) return;

          switch (err.message.name) {
            case 'UserAlreadyExistsException':
              handleUserExists();
              break;
            default:
              break;
          }
        })
        .finally(() => {
          if (!isMounted) return;

          setIsFetching(false);
        });
  }, [user?.token, submitRegistration]);

  function handleUserExists() {
    dispatch(
      setSnackbarProps({
        open: true,
        message: 'Cannot Register User, This User Already Exists',
        severity: 'error',
      })
    );
    // logout();
  }

  return userModel;
}
